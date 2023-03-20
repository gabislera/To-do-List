import React from 'react'
import Task from './Task'

const checkedSort = (task) => task.checked ? 1 : -1

const Tasks = ({ tasks, setTasks }) => {
  const sortedTasks = tasks.sort(checkedSort)

  const deleteTask = (task) => {
    const filtro = tasks.filter(({ id }) => id !== task.id)
    setTasks(filtro)
  }

  const editTask = (newTask) => {
    const newTasks = tasks.map((task) => {
      if (task.id === newTask.id)
        return {
          // id: task.id,
          ...task,
          input: newTask.input
        }
      return task
    })
    setTasks(newTasks)
  }

  const handleChecked = (newTask) => {
    const newTasks = tasks.map((task) => {
      if (task.id === newTask.id)
        return {
          ...task,
          checked: !task.checked
        }
      return task
    })
    setTasks(newTasks)
  }

  return (
    <div className='coments-lista'>
      <ul>
        {sortedTasks.map((task, index) =>
          <Task task={task} key={`${task.id}`} index={index} deleteTask={deleteTask} editTask={editTask} handleChecked={handleChecked} />
        )}
      </ul>
    </div>
  )
}

export default Tasks