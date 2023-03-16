import React from 'react'
import Task from './Task'

const Tasks = ({ comentarios, setComentarios }) => {
  function deleteTask(index) {
    const filtro = comentarios.filter((_, indexItem) => indexItem !== index)
    setComentarios(filtro)
  }

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