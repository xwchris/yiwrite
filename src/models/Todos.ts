// import { createRxDatabase } from 'rxdb'
// import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie'
import { useEffect, useState } from 'react'
import { createAppWriteRxAdapter } from './replication'
import { RxCollection } from 'rxdb'

const todoSchema = {
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      maxLength: 20
    },
    text: {
      type: 'string'
    },
    completed: {
      type: 'boolean',
      default: false
    },
    // deleted: {
    //   type: 'boolean',
    //   default: false
    // },
    modified: {
      type: 'number'
      // default: 0
    }
  },
  required: ['id', 'text', 'completed']
}

async function getTasks() {
  return await createAppWriteRxAdapter({
    schema: todoSchema,
    project: '652f6e6a071349cd98bf',
    dbId: 'todos',
    tableName: 'todos'
  })
}

const tasksPromise = getTasks()

export function useTodos() {
  const [collection, setCollection] =
    useState<RxCollection<any, {}, {}, {}, unknown>>()
  const [todos, setTodos] = useState<any[]>([])

  useEffect(() => {
    if (!collection) {
      tasksPromise.then(({ collection, replicationState }) => {
        setCollection(collection)

        collection?.find().$.subscribe((todos) => {
          setTodos(todos)
        })
      })
    }
  }, [])

  async function create(text: string) {
    await collection?.insert({
      id: Date.now().toString(),
      text,
      completed: false
    })
  }

  async function updateOne(id: string, completed: boolean) {
    const doc = await collection?.findOne(id)
    if (doc) {
      await doc.update({
        $set: {
          completed,
          modified: Date.now()
        }
      })
    }
  }

  async function deleteOne(id: string) {
    const doc = await collection?.findOne(id)
    if (doc) {
      await doc.remove()
    }
  }

  // async function pull() {}

  return { todos, create, updateOne, deleteOne }
}
