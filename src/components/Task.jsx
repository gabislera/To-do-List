import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import InputEdit from './InputEdit'

const Task = ({ task, deleteTask, index, editTask }) => {
  const [showEditInput, setShowEditInput] = React.useState(false)
  // console.log(task, 'teste')

  function editTask() {
    setShowEditInput((prevState) => !prevState)
  }

  return (
    <>
      <div className='container-div' >
        <div>
          <li><input type="checkbox" />{task.input}</li>
        </div>
        <div className='icons'>
          <FontAwesomeIcon className='edit-button' onClick={editTask} icon={faPenToSquare} />
          <FontAwesomeIcon className='delete-button' onClick={() => deleteTask(index)} icon={faTrash} />
        </div>
      </div>
      {showEditInput && <InputEdit task={task} />}
    </>
  )
}

export default Task