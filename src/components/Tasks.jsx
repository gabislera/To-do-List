import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import Task from './Task'
import { checkedSort, sortPriority } from '../utils'

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

  // useEffect(() => {
  //   console.log(date);
  // }, [date])


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
    // dateCompare.setDate(dateCompare.getDate() - 1)
    setDateCompare((prevState) => prevState.setDate(prevState.getDate() - 1))
    console.log(dateCompare)
  }

  const handleRight = () => {
    // dateCompare.setDate(dateCompare.getDate() + 1)
    setDateCompare((prevState) => prevState.setDate(prevState.getDate() + 1))
    console.log(dateCompare)
  }

  return (
    <div className='coments-lista'>
      <ul>
        {showAllActive ? joinedTasks.map((task, index) =>
          <Task task={task} key={`${task.id}`} index={index} deleteTask={deleteTask} editTask={editTask} handleChecked={handleChecked} tasks={tasks} handleSelected={handleSelected} />
        ) : joinedTasksAll.map((task, index) =>
          <Task task={task} key={`${task.id}`} index={index} deleteTask={deleteTask} editTask={editTask} handleChecked={handleChecked} tasks={tasks} handleSelected={handleSelected} />
        )}
      </ul>
      <div className='showAll'>
        <button className='leftButton' onClick={handleLeft}><FontAwesomeIcon icon={faCaretUp} /></button>
        <button onClick={handleShowAll}>{showAllActive ? 'Todas' : 'Hoje'}</button>
        <button className='rightButton' onClick={handleRight}><FontAwesomeIcon icon={faCaretUp} /></button>
      </div>
    </div>
  )
}

export default Tasks