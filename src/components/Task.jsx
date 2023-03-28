import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import InputEdit from './InputEdit'

const Task = ({ task, deleteTask, editTask, handleChecked }) => {
  const [showEditInput, setShowEditInput] = React.useState(false)

  const _handleChecked = () => {
    handleChecked(task)
  }

  const deleteTaskIfNotChecked = () => {
    if (!task.checked)
      deleteTask(task)
  }

  const showEditTask = () => {
    setShowEditInput((prevState) => !prevState)
  }

  const editTaskChild = (newTask) => {
    editTask(newTask)
    setShowEditInput(false)
  }

  return (
    <>
      <div className='container-div' >
        <div className='checkbox-input'>
          <label htmlFor="checkbox"></label>
          <input type="checkbox" id='checkbox' checked={task.checked} onChange={_handleChecked} />
          <div className='input-checked'>{task.input}</div>
        </div>
        <div className='icons'>
          <input type="date" />
          <FontAwesomeIcon className='edit-button' onClick={showEditTask} icon={faPenToSquare} />
          <FontAwesomeIcon className='delete-button' onClick={deleteTaskIfNotChecked} icon={faTrash} />
        </div>
      </div>
      {showEditInput && <InputEdit task={task} editTaskChild={editTaskChild} />}
    </>
  )
}

export default Task