import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

const DaySelect = ({ showDate, handleLeft, handleRight, showAllActive, handleShowAll }) => {
  return (
    <div className='daySelector'>
      <div className='showDate'>{showDate}</div>
      <div className='daySelector-buttons'>
        <button className='leftButton' onClick={handleLeft}><FontAwesomeIcon icon={faCaretUp} /></button>
        <button onClick={handleShowAll}>{showAllActive ? 'Todas' : 'Hoje'}</button>
        <button className='rightButton' onClick={handleRight}><FontAwesomeIcon icon={faCaretUp} /></button>
      </div>
      <div style={{ color: '#1A1A1A' }}>{showDate}</div>
    </div>
  )
}

export default DaySelect