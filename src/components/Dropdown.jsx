import { useState, useEffect } from 'react'

const Dropdown = ({ setShowdropdown, handleSelected, task }) => {
  const [dropDownValue, setDropDownValue] = useState('')

  const handleChangeDropDown = ({ target }) => {
    const obj = { ...task, select: target.value }
    // console.log(obj)
    setDropDownValue(target.value)
    handleSelected(obj)
    setShowdropdown(false)
  }

  // useEffect(() => {
  //   console.log(dropDownValue)
  // }, [handleChangeDropDown])

  return (
    <div className='dropDown-Container'>
      <div className='dropDown-Select'>
        <select value={dropDownValue} onChange={handleChangeDropDown}>
          <option disabled value="">Selecione a prioridade</option>
          <option value="baixa">baixa</option>
          <option value="media">média</option>
          <option value="alta">alta</option>
        </select>
      </div>
    </div>
  )
}

export default Dropdown