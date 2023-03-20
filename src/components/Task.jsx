import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import InputEdit from './InputEdit'

const Task = ({ task, deleteTask, editTask, handleChecked }) => {
  const [showEditInput, setShowEditInput] = React.useState(false)

  function _handleChecked() {
    handleChecked(task)
  }

  function deleteTaskIfNotChecked() {
    if (!task.checked)
      deleteTask(task)
  }

  function showEditTask() {
    console.log(task.checked)
    setShowEditInput((prevState) => !prevState)
  }

  function editTaskChild(newTask) {
    editTask(newTask)
    setShowEditInput(false)
  }

  return (
    <>
      <div className='container-div' >
        <div>
          <li className='checkbox-input'>
            <label htmlFor="my-checkbox"></label>
            <input type="checkbox" id='my-checkbox' checked={task.checked} onChange={_handleChecked} />
            <div className='input-checked'>{task.input}</div>
          </li>
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