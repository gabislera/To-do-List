import { useState, useEffect } from 'react'
import './App.css'
import './components/reset.css'
import Tasks from './components/Tasks/Tasks'
import Modal from './components/Modal/Modal';
import Info from './components/Info/Info';
import NoTasks from './components/NoTasks/NoTasks';

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
    <div className='container'>
      <div className='header' />
      <Modal id={id} onCloseModal={handleModal} showModal={showModal} addTasks={addTasks} />
      <button onClick={handleModal} className='buttonModal'>Nova tarefa</button>
      <Info tasks={tasks} />
      <div className='coments-container'>
        {(tasks.length === 0) ? <NoTasks text={'Você ainda não possui tarefas criadas'} /> : <Tasks tasks={tasks} setTasks={setTasks} />}
      </div>
    </div>
  );
}

export default App;
