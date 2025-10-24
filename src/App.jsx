import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import DeleteModal from './components/DeleteModal'

function App() {
  // State per memorizzare l'array di todos
  // Inizializziamo direttamente da localStorage
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })
  // State per il modal di conferma eliminazione
  const [showModal, setShowModal] = useState(false)
  const [todoToDelete, setTodoToDelete] = useState(null)

  // useEffect per salvare i todos in localStorage ogni volta che cambiano
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])  // Dipendenza: todos → esegue quando todos cambia

  // Funzione per aggiungere un nuovo todo
  // Ora riceve il testo direttamente come parametro
  const handleAddTodo = (text) => {
    // Crea nuovo todo object
    const newTodo = {
      id: Date.now(), // usa timestamp come ID unico
      text: text,
      completed: false
    }

    // Aggiungi nuovo todo all'array (spread operator)
    setTodos([...todos, newTodo])
  }

  // Funzione per togglere lo stato completed di un todo
  const toggleTodo = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }  // Se è il todo cercato, inverti completed
        : todo                                      // Altrimenti lascia invariato
    ))
  }

  // Funzione per eliminare un todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))  // Filtra: mantieni tutti tranne quello con questo ID
  }

  // Funzione chiamata quando clicchi sul bottone "×"
  const handleDeleteClick = (id) => {
    setTodoToDelete(id)   // Salva l'ID del todo da eliminare
    setShowModal(true)    // Mostra il modal
  }

  // Funzione per confermare l'eliminazione
  const confirmDelete = () => {
    deleteTodo(todoToDelete)  // Elimina il todo
    setShowModal(false)       // Chiude il modal
    setTodoToDelete(null)     // Reset dell'ID
  }

  // Funzione per annullare l'eliminazione
  const cancelDelete = () => {
    setShowModal(false)    // Chiude il modal
    setTodoToDelete(null)  // Reset dell'ID
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        My Todo App
      </h1>

      {/* Form per aggiungere todo */}
      <TodoForm onAddTodo={handleAddTodo} />

      {/* Lista dei todos */}
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={handleDeleteClick}
      />

      {/* Modal di conferma eliminazione */}
      <DeleteModal
        show={showModal}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  )
}

export default App
