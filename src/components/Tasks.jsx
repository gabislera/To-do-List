import { useEffect, useState } from 'react'
import Task from './Task'
import { checkedSort, sortPriority } from '../utils'
import DaySelect from './DaySelect'
import NoTasks from './NoTasks'

const filterByDate = (task, dateCompare) => {
  const currentDate = new Date(task.date)
  return ((currentDate.getDate() === dateCompare.getDate()) && (currentDate.getMonth() === dateCompare.getMonth()) && (currentDate.getYear() === dateCompare.getYear()))
}

const formatList = (taskList) => {
  const sortedChecked = taskList.filter((task) => task.checked).sort(checkedSort)
  const sortedUnchecked = taskList.filter((task) => !task.checked).sort(checkedSort)

  const sortedCheckedPriority = sortedChecked.sort(sortPriority)
  const sortedUncheckedPriority = sortedUnchecked.sort(sortPriority)

  return [...sortedUncheckedPriority, ...sortedCheckedPriority]
}

const Tasks = ({ tasks, setTasks }) => {
  const [dateCompare, setDateCompare] = useState(new Date())
  const [showAllActive, setShowAllActive] = useState(true)
  // const [dayVerifyer, setDayVerifyer] = useState(tasks)

  const tasksToday = tasks.filter((task) => filterByDate(task, dateCompare))
  // const tasksToday = tasks.filter(filterByDate)

  const joinedTasks = formatList(tasksToday)
  const joinedTasksAll = formatList(tasks)

  const handleShowAll = () => {
    setShowAllActive((prevState) => !prevState)
  }

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
    // const teste = filterByDate(newTask, dateCompare)
    // console.log(teste)

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

  const handleLeft = () => {
    dateCompare.setDate(dateCompare.getDate() - 1)
    setDateCompare(new Date(dateCompare))
  }

  const handleRight = () => {
    dateCompare.setDate(dateCompare.getDate() + 1)
    setDateCompare(new Date(dateCompare))
  }

  const showDay = dateCompare.getDate()
  const showMonth = dateCompare.getMonth()

  const showDate = `${('00' + showDay).slice(-2)}/${('00' + showMonth).slice(-2)}`

  return (
    <div className='coments-lista'>
      <ul>
        {showAllActive && joinedTasks.length ?
          joinedTasks.map((task, index) =>
            <Task task={task} key={`${task.id}`} index={index} deleteTask={deleteTask} editTask={editTask} handleChecked={handleChecked} tasks={tasks} handleSelected={handleSelected} />
          ) :
          <NoTasks text={'Nenhuma tarefa para o dia de hoje'} />}

        {/* {!showAllActive && joinedTasks.length ?
          joinedTasksAll.map((task, index) =>
            <Task task={task} key={`${task.id}`} index={index} deleteTask={deleteTask} editTask={editTask} handleChecked={handleChecked} tasks={tasks} handleSelected={handleSelected} />
          ) :
          <NoTasks text={'Nenhuma tarefa para o dia de hoje'} />} */}

      </ul>
      <DaySelect showDate={showDate} handleLeft={handleLeft} handleRight={handleRight} showAllActive={showAllActive} handleShowAll={handleShowAll} />
    </div>
  )
}

export default Tasks