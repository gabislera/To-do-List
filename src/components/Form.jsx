import { useState, useEffect } from 'react'

const todayDate = new Date()

const Form = ({ addTasks, id }) => {
  const [input, setInput] = useState('')
  const [dateValue, setDateValue] = useState(todayDate)

  const handleChange = ({ target }) => {
    setInput(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const date = dateValue ?? todayDate
    // (dateValue === undefined) ? todayDate : dateValue
    const inputObj = {
      input,
      id,
      checked: false,
      select: '',
      date: date
    }

    if (dateValue.getDate() >= todayDate.getDate()) {
      addTasks(inputObj)
      setInput('')
    } else alert('Não é possivel adicionar tarefas para dias passados')
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