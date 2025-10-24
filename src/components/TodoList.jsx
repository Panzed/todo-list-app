import TodoItem from './TodoItem'

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <div className="max-w-sm mx-auto space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default TodoList
