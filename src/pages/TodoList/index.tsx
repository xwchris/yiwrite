import { useState } from 'react'
import List from './List'
import { useTodos } from 'models/Todos'

const TodoList: React.FC = () => {
  const [text, setText] = useState('')
  const { create } = useTodos()
  return (
    <div className="mx-auto w-[800px] pt-8">
      <input
        type="text"
        value={text}
        placeholder="Type and press Enter to add a new item …"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (text === '') return
            create(text)
            setText('')
          }
        }}
        className="border border-gray-300 rounded-md p-2 mb-4 w-full"
      />
      <List />
    </div>
  )
}

export default TodoList
