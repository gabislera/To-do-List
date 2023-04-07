import React from 'react'

const NoTasks = ({ text }) => {
  return (
    <div className='noTaskContainer'>
      <span className='line'></span>
      <p>{text}</p>
    </div>
  )
}

export default NoTasks