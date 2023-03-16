import React from 'react'

const Form = ({ addComentario }) => {
  const [input, setInput] = React.useState('')

  function handleChange({ target }) {
    setInput(target.value)
  }

  function handleClick(e) {
    e.preventDefault()
    addComentario(input)
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
          <input type="text" value={input} className='formInput' placeholder='Digite algo' onChange={handleChange} />
          <button onClick={handleClick}>Adicionar</button>
        </form>

      </div>
    </>
  )
}

export default Form