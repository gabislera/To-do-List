import { useEffect } from 'react'
import Task from './Task'

const checkedSort = (task) => task.checked ? 1 : -1

const checkedSelect = (task) => {
  if (task.select === 'baixa') return 1
  if (task.select === 'media') return 0
  return -1
}

// const STAR_COLOR = {
//   'alta': 0,
//   'media': 1,
//   'baixa': 2,
// }

const Tasks = ({ tasks, setTasks }) => {
  const sortedTasks = tasks.sort(checkedSort).sort(checkedSelect)

  const deleteTask = (task) => {
    const filtro = tasks.filter(({ id }) => id !== task.id)
    setTasks(filtro)
  }

  const editTask = (newTask) => {
    const newTasks = tasks.map((task) => {
      if (task.id === newTask.id)
        return {
          ...task,
          input: newTask.input
        }
      return task
    })
    setTasks(newTasks)
  }

  useEffect(() => {
    console.log(tasks)
  }, [tasks])

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

  const handleSelected = (newTask) => {
    const newTasks = tasks.map((task) => {
      if (task.id === newTask.id)
        return {
          ...task,
          select: newTask.select
        }
      return task
    })
    setTasks(newTasks)
    console.log(newTasks)
  }

  return (
    <div className='coments-lista'>
      <ul>
        {sortedTasks.map((task, index) =>
          <Task task={task} key={`${task.id}`} index={index} deleteTask={deleteTask} editTask={editTask} handleChecked={handleChecked} tasks={tasks} handleSelected={handleSelected} />
        )}
      </ul>
    </div>
  )
}

export default Tasks