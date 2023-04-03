import { useState, useEffect } from 'react'

const Info = ({ tasks }) => {
  const concluidas = tasks.filter((task) => task.checked)

  return (
    <div className='tasksInfo'>
      <div className='created'>
        <p>Tarefas criadas </p>
        <p className='createdValue'>{tasks.length}</p>
      </div>
      <div className='concluded'>
        <p >Concluídas</p>
        <p className='concludedValue'>{concluidas.length}</p>
      </div>
    </div>
  )
}

export default Info