import React from 'react'
import Form from './Form'

const Modal = ({ addTasks, showModal, onCloseModal, id }) => {
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