import { useState, useEffect } from 'react'
import './App.css'
import './components/reset.css'
import Tasks from './components/Tasks'
import Modal from './components/Modal';

function App() {
  const [tasks, setTasks] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [id, setId] = useState(0)

  const handleModal = () => {
    setShowModal((prevState) => !prevState)
  }
  const addTasks = (task) => {
    setTasks((prevTasks) => [...prevTasks, task])
    setId(id + 1)
    handleModal()
  }

  return (
    <div >
      <div className='header' />
      <Modal id={id} onCloseModal={handleModal} showModal={showModal} addTasks={addTasks} />
      <button onClick={handleModal} className='buttonModal'>Clique para adicionar uma tarefa</button>
      <div className='coments-container'>
        <Tasks tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
