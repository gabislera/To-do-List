import { useState } from 'react'

const InputEdit = ({ task, editTaskChild }) => {
  const [newTask, setNewTask] = useState('')

  const handleChangeEdit = ({ target }) => {
    setNewTask(target.value)
  }

  const handleInputEdit = () => {
    const inputNewObj = { input: newTask, id: task.id }
    editTaskChild(inputNewObj)
    setNewTask('')
  }

  return (
    <form className='editInput' onSubmit={handleInputEdit}>
      <input type="text" className='formInput edit' placeholder={'Edite a tarefa'} value={newTask} onChange={handleChangeEdit} autoFocus />
      <button className='editButton'>Editar</button>
    </form>
  )
}

export default InputEdit