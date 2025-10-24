function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div
      onClick={() => onToggle(todo.id)}
      className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-center justify-between">
        <span className={todo.completed ? "line-through text-gray-400" : "text-gray-800"}>
          {todo.text}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation()  // Impedisce che il click attivi onToggle
            onDelete(todo.id)
          }}
          className="ml-4 text-red-500 hover:text-red-700 font-bold text-xl transition-colors"
        >
          ×
        </button>
      </div>
    </div>
  )
}


export default TodoItem
