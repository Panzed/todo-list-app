import TodoItem from './TodoItem'

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <div className="max-w-sm mx-auto">
      {/* Container scrollabile con altezza massima */}
      <div className="max-h-[500px] overflow-y-auto pr-2 space-y-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoList
