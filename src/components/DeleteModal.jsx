function DeleteModal({ show, onConfirm, onCancel }) {
  // Se show è false, non renderizza nulla
  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm mx-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          Conferma eliminazione
        </h3>
        <p className="text-gray-600 mb-6">
          Sei sicuro di voler eliminare questo todo? Questa azione non può essere annullata.
        </p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Annulla
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Elimina
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
