import { useTodos } from 'models/Todos'
import { classNames } from 'utils'

const List: React.FC = () => {
  const { todos, updateOne, deleteOne } = useTodos()
  return (
    <ul className={`text-gray-600`}>
      {todos.map((item) => (
        <li
          key={item.id}
          className={`flex items-center py-3 border-b border-gray-200 ${
            item.completed ? 'opacity-50' : ''
          }`}
        >
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => {
              updateOne(item.id, !item.completed)
            }}
            className="mr-4 scale-150"
          />
          <p
            className={classNames(
              'text-lg',
              'grow',
              item.completed ? 'line-through' : ''
            )}
          >
            {item.text}
          </p>
          <button
            onClick={() => deleteOne(item.id)}
            className="ml-4 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-400 transition-colors duration-3"
          >
            x
          </button>
        </li>
      ))}
      {todos.length === 0 && <li className="empty">Empty</li>}
    </ul>
  )
}

export default List
