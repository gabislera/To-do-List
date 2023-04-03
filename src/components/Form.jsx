import { useState, useEffect } from 'react'

const todayDate = new Date()

const Form = ({ addTasks, id }) => {
  const [input, setInput] = useState('')
  const [dateValue, setDateValue] = useState()

  const handleChange = ({ target }) => {
    setInput(target.value)
  }

  const handleSubmit = (e) => {
    const date = dateValue ?? todayDate
    const inputObj = {
      input,
      id,
      checked: false,
      select: '',
      date: date
      // (dateValue === undefined) ? todayDate : dateValue
    }
    e.preventDefault()
    addTasks(inputObj)
    setInput('')
  }

  const handleDate = ({ target }) => {
    const date = new Date(target.value)
    date.setHours(date.getHours() + 3)
    console.log(date);
    setDateValue(date)
  }

  return (
    <>
      <div className='formContainer'>
        <form className='form' onSubmit={handleSubmit}>
          <input className='formInput' type="text" required value={input} placeholder='Digite algo' onChange={handleChange} autoFocus />
          <input className='formDatePicker' type="date" onChange={handleDate} />
          <button >Adicionar</button>
        </form>
      </div>
    </>
  )
}

export default Form