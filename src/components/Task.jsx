import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import InputEdit from './InputEdit'

const Task = ({ task, deleteTask, editTask }) => {
  const [showEditInput, setShowEditInput] = React.useState(false)
  const [isChecked, setIsChecked] = React.useState(false)

  function handleChecked() {
    setIsChecked(!isChecked)
  }

  function deleteTaskIfChecked() {
    if (!isChecked)
      deleteTask(task)
  }

  function showEditTask() {
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
            <input type="checkbox" id='my-checkbox' checked={isChecked} onChange={handleChecked} />
            <div className='input-checked'>{task.input}</div>
          </li>
        </div>
        <div className='icons'>
          <input type="date" />
          <FontAwesomeIcon className='edit-button' onClick={showEditTask} icon={faPenToSquare} />
          <FontAwesomeIcon className='delete-button' onClick={deleteTaskIfChecked} icon={faTrash} />
        </div>
      </div>
      {showEditInput && <InputEdit task={task} editTaskChild={editTaskChild} />}
    </>
  )
}

export default Task