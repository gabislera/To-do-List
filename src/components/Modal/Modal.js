import { useEffect } from 'react'
import Form from '../Form/Form'
import './Modal.css'

const Modal = ({ addTasks, showModal, onCloseModal, id }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onCloseModal()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onCloseModal])

  if (!showModal) return <></>
  return (
    <div className="modal">
      <div className="card">
        <Form addTasks={addTasks} id={id} />
      </div>
      <div className="modalClose" onClick={onCloseModal}></div>
    </div>
  )
}

export default Modal