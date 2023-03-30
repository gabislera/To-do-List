import { useState, useRef, useEffect } from 'react'

const Form = ({ addTasks, id }) => {
  const [input, setInput] = useState('')

  const handleChange = ({ target }) => {
    setInput(target.value)
  }

  const handleSubmit = (e) => {
    const inputObj = { input, id, checked: false, select: '' }
    e.preventDefault()
    addTasks(inputObj)
    setInput('')
  }

  return (
    <>
      <div className='formContainer'>
        <form className='form' onSubmit={handleSubmit}>
          <input className='formInput' type="text" required value={input} placeholder='Digite algo' onChange={handleChange} autoFocus />
          <button >Adicionar</button>
        </form>
      </div>
    </>
  )
}

export default Form