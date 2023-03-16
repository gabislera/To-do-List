import React from 'react'

const InputEdit = ({ comentario }) => {
  const [comentarioEditado, setComentarioEditado] = React.useState([])

  function handleChangeEdit({ target }) {
    setComentarioEditado(target.value)
  }

  function handleInputEdit() {
    console.log(comentario, comentarioEditado)
    setComentarioEditado('')
  }

  return (
    <div className='editInput'>
      <input type="text" className='formInput edit' placeholder={'Edite a tarefa'} value={comentarioEditado} onChange={handleChangeEdit} />
      <button className='editButton' onClick={handleInputEdit}>Editar</button>
    </div>
  )
}

export default InputEdit