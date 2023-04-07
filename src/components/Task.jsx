import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare, faStar } from '@fortawesome/free-solid-svg-icons'
import InputEdit from './InputEdit'
import Dropdown from './Dropdown'

const STAR_COLOR = {
  'alta': '#FADC09',
  'media': '#A9AAAE',
  'baixa': '#A67D01'
}

const Task = ({ task, deleteTask, editTask, handleChecked, handleSelected }) => {
  const [showEditInput, setShowEditInput] = useState(false)
  const [showDropdown, setShowdropdown] = useState(false)

  const _handleChecked = () => {
    handleChecked(task)
  }

  const _handleSelected = (newTask) => {
    handleSelected(newTask)
  }

  const deleteTaskIfNotChecked = () => {
    if (!task.checked)
      deleteTask(task)
  }

  const handleShowDropdown = () => {
    setShowdropdown((prevState) => !prevState)
  }

  const showEditTask = () => {
    setShowEditInput((prevState) => !prevState)
  }

  const editTaskChild = (newTask) => {
    editTask(newTask)
    setShowEditInput(false)
  }

  const color = STAR_COLOR[task.select]

  return (
    <>
      <div className='container-div' >
        <div className='checkbox-input'>
          <label htmlFor="checkbox"></label>
          <input type="checkbox" id='checkbox' checked={task.checked} onChange={_handleChecked} />
          <div className='input-checked'>{task.input}</div>
        </div>
        <div className='icons'>
          <FontAwesomeIcon onClick={handleShowDropdown} icon={faStar} color={color} />
          {showDropdown && <Dropdown setShowdropdown={setShowdropdown} handleSelected={_handleSelected} task={task} />}

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