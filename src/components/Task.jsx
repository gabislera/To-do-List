import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import InputEdit from './InputEdit'

const Task = ({ task, deleteTask, index, editTask }) => {
  const [showEditInput, setShowEditInput] = React.useState(false)
  // console.log(task, 'aqui esta o objeto')

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
          <li><input type="checkbox" />{task.input}</li>
        </div>
        <div className='icons'>
          <FontAwesomeIcon className='edit-button' onClick={showEditTask} icon={faPenToSquare} />
          <FontAwesomeIcon className='delete-button' onClick={() => deleteTask(index)} icon={faTrash} />
        </div>
      </div>
      {showEditInput && <InputEdit task={task} editTaskChild={editTaskChild} />}
    </>
  )
}

export default Task