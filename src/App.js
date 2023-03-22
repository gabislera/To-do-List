import React from 'react'
import './App.css'
import './components/reset.css'
import Form from './components/Form';
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = React.useState([])
  const addTasks = (task) => {
    setTasks((prevTasks) => [...prevTasks, task])
  }

  return (
    <div>
      <Form addTasks={addTasks} />
      <div className='coments-container'>
        <Tasks tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
