import { RxJsonSchema, createRxDatabase } from 'rxdb'
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie'
import { AppWriteReplication } from './AppWriteReplication'
import DatabaseClient from './DatabaseClient'
import { wrappedValidateZSchemaStorage } from 'rxdb/plugins/validate-z-schema'

interface AppWriteRxAdapterConfig {
  schema: RxJsonSchema<any>
  tableName: string
  project: string
  dbId: string
  // collectionId: string
}

export async function createAppWriteRxAdapter({
  schema,
  project,
  dbId,
  tableName
}: AppWriteRxAdapterConfig) {
  const storage = wrappedValidateZSchemaStorage({
    storage: getRxStorageDexie()
  })
  const db = await createRxDatabase({
    name: tableName,
    storage
  })
  const collection = await db.addCollections({
    todos: {
      schema
    }
  })

  const appWriteClient = new DatabaseClient({ projectId: project, dbId })

  const replicationState = await new AppWriteReplication({
    appWriteClient,
    table: tableName,
    collection: collection.todos,
    replicationIdentifier: project + tableName,
    live: false,
    autoStart: true,
    deletedField: 'deleted',
    pull: {
      lastModifiedField: 'modified'
    },
    push: {}
  })

  replicationState.error$.subscribe((err) => {
    console.error('Replication error:', err)
  })

  return { replicationState, collection: collection.todos }
}
