import React from 'react'
import './NoTask.css'

const NoTasks = ({ text }) => {
  return (
    <div className='noTaskContainer'>
      <span className='line'></span>
      <p>{text}</p>
    </div>
  )
}

export default NoTasks