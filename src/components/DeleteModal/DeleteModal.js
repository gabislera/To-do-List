import React, { useEffect } from 'react'
import './DeleteModal.css'

const Modal = ({ showDeleteModal, handleDeleteModal, deleteTaskIfNotChecked }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') handleDeleteModal()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleDeleteModal])

  if (!showDeleteModal) return <></>
  return (
    <div className="delete-modal">
      <div className="delete-card">
        <h1>Tem certeza que deseja excluir?</h1>
        <div className='delete-buttons'>
          <button className='yes' onClick={deleteTaskIfNotChecked}>Sim</button>
          <button className='no' onClick={handleDeleteModal}>Não</button>
        </div>
      </div>
      <div className="delete-modalClose" onClick={handleDeleteModal}></div>
    </div>
  )
}

export default Modal