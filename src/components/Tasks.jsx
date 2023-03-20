import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, setTasks }) => {
  const deleteTask = (task) => {
    const filtro = tasks.filter(({ id }) => id !== task.id)
    setTasks(filtro)
  }

  const editTask = (newTask) => {
    const newTasks = tasks.map((task) => {
      if (task.id === newTask.id)
        return {
          id: task.id,
          input: newTask.input
        }
      return task
    })
    setTasks(newTasks)
  }

  return (
    <div className='coments-lista'>
      <ul>
        {tasks.map((task, index) =>
          <Task task={task} key={`${task.id}`} index={index} deleteTask={deleteTask} editTask={editTask} />
        )}
      </ul>
    </div>
  )
}

export default Tasks