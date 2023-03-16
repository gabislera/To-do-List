import React from 'react'
import Task from './Task'

const Tasks = ({ comentarios, setComentarios }) => {

  function deleteTask(index) {
    const filtro = comentarios.filter((_, indexItem) => indexItem !== index)
    setComentarios(filtro)
  }

  // function InputEdit(data) {
  //   return <div>
  //     <input type="text" className='formInput' placeholder={data} />
  //     <button >Adicionar</button>
  //   </div>
  // }

  // function editTask(data) {
  //   <InputEdit />
  //   alert(data)
  // }

  return (
    <div className='coments-lista'>
      <ul>
        {comentarios.map((comentario, index) =>
          <Task comentario={comentario} key={`${index}`} index={index} deleteTask={deleteTask} />
        )}
      </ul>
    </div>
  )
}

export default Tasks