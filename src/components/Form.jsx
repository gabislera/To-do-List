import React from 'react'

const Form = ({ addTasks }) => {
  const [input, setInput] = React.useState('')
  const [id, setId] = React.useState(0)

  const handleChange = ({ target }) => {
    setInput(target.value)
  }

  const handleSubmit = (target) => {
    const inputObj = { input, id, checked: false }
    setId(id + 1)
    target.preventDefault()
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
        <form onSubmit={handleSubmit} className='form'>
          <input className='formInput' type="text" value={input} placeholder='Digite algo' onChange={handleChange} />
          <button >Adicionar</button>
        </form>
      </div>
    </>
  )
}

export default Form