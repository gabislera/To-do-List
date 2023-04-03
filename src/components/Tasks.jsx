import { useEffect } from 'react'
import Task from './Task'

const checkedSort = (task) => task.checked ? 1 : -1

// const PRIORITY = {
//   'alta': -1,
//   'media': 0,
//   'baixa': 1,
//   '': 2
// }

const sortPriority = (task) => {
  if (task.select === 'media') return 1
  if (task.select === 'alta') return -1
  return 0
}

const hoje = new Date()

const Tasks = ({ tasks, setTasks }) => {
  const taskSToday = tasks.filter((task) =>
    ((task.date.getDay() === hoje.getDay()) && (task.date.getMonth() === hoje.getMonth()) && (task.date.getYear() === hoje.getYear()))
  )

  const sortedChecked = taskSToday.filter((task) => task.checked).sort(checkedSort)
  const sortedUnchecked = taskSToday.filter((task) => !task.checked).sort(checkedSort)

  const sortedCheckedPriority = sortedChecked.sort(sortPriority)
  const sortedUncheckedPriority = sortedUnchecked.sort(sortPriority)

  // const mappedList = sortedCheckedPriority.map((task) => sortPriority(task))


  const joinedTasks = [...sortedUncheckedPriority, ...sortedCheckedPriority]

  const deleteTask = (task) => {
    const filtro = tasks.filter(({ id }) => id !== task.id)
    setTasks(filtro)
  }

  // useEffect(() => {
  //   console.log(mappedList)
  // }, [mappedList])


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
  }

  return (
    <div className='coments-lista'>
      <ul>
        {joinedTasks.map((task, index) =>
          <Task task={task} key={`${task.id}`} index={index} deleteTask={deleteTask} editTask={editTask} handleChecked={handleChecked} tasks={tasks} handleSelected={handleSelected} />
        )}
      </ul>
    </div>
  )
}

export default Tasks