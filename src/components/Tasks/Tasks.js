import { useState } from 'react'
import Task from '../Task/Task'
import { checkedSort, sortPriority } from '../../utils'
import DaySelect from '../DaySelect/DaySelect'
import NoTasks from '../NoTasks/NoTasks'
import './Tasks.css'

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
  const [showTodayTask, setShowTodayTask] = useState(true)
  // const [dayVerifyer, setDayVerifyer] = useState(tasks)

  const tasksToday = tasks.filter((task) => filterByDate(task, dateCompare))
  // const tasksToday = tasks.filter(filterByDate)

  const joinedTasks = formatList(tasksToday)
  const joinedTasksAll = formatList(tasks)

  const handleShowAll = () => {
    setShowTodayTask((prevState) => !prevState)
  }

  const deleteTask = (task) => {
    const data = new Date()
    const filtro = tasks.filter(({ id }) => id !== task.id)
    if (task.date.getDate() < data.getDate()) setTasks(tasks)
    else setTasks(filtro)
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

  const showTasks = () => {
    if (showTodayTask) {
      if (joinedTasks.length) {
        return joinedTasks.map((task, index) =>
          <Task
            task={task}
            key={`${task.id}`}
            index={index}
            deleteTask={deleteTask}
            editTask={editTask}
            handleChecked={handleChecked}
            tasks={tasks}
            handleSelected={handleSelected} />
        )
      }
      return <NoTasks text={'Nenhuma tarefa para o dia de hoje'} />
    } else {
      if (joinedTasksAll.length) {
        return joinedTasksAll.map((task, index) =>
          <Task
            task={task}
            key={`${task.id}`}
            index={index}
            deleteTask={deleteTask}
            editTask={editTask}
            handleChecked={handleChecked}
            tasks={tasks}
            handleSelected={handleSelected} />
        )
      }
      return <NoTasks text={'Nenhuma tarefa para o dia de hoje'} />
    }
  }

  return (
    <div className='coments-lista'>
      <ul>
        {showTasks()}
      </ul>
      <DaySelect
        showDate={showDate}
        handleLeft={handleLeft}
        handleRight={handleRight}
        showAllActive={showTodayTask}
        handleShowAll={handleShowAll} />
    </div>
  )
}

export default Tasks