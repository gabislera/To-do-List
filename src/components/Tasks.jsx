import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, setTasks }) => {
  function deleteTask(index) {
    const filtro = tasks.filter((_, indexItem) => indexItem !== index)
    setTasks(filtro)
  }

  return (
    <div className='coments-lista'>
      <ul>
        {tasks.map((task, index) =>
          <Task task={task} key={`${index}`} index={index} deleteTask={deleteTask} />
        )}
      </ul>
    </div>
  )
}

export default Tasks