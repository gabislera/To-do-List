import React from 'react'

const Form = ({ addTasks }) => {
  const [input, setInput] = React.useState('')
  const [id, setId] = React.useState(0)

  function handleChange({ target }) {
    setInput(target.value)
  }

  const handleClick = (e) => {
    const inputObj = { input, id }
    setId(id + 1)
    e.preventDefault()
    addTasks(inputObj)
    setInput('')
  }

  return (
    <>
      <header>
        <span>Imagem</span>
        <span>Text</span>
      </header>

      <div className='coments'>
        <form className='form'>
          <input className='formInput' type="text" value={input} placeholder='Digite algo' onChange={handleChange} />
          <button onClick={handleClick}>Adicionar</button>
        </form>
      </div>
    </>
  )
}

export default Form