import React from 'react'

const InputEdit = ({ task }) => {
  const [newTask, setNewTask] = React.useState([])

  function handleChangeEdit({ target }) {
    setNewTask(target.value)
  }

  function handleInputEdit() {
    console.log(task, newTask)
    setNewTask('')
  }

  return (
    <div className='editInput'>
      <input type="text" className='formInput edit' placeholder={'Edite a tarefa'} value={newTask} onChange={handleChangeEdit} />
      <button className='editButton' onClick={handleInputEdit}>Editar</button>
    </div>
  )
}

export default InputEdit