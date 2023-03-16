import React, { useEffect } from 'react'
import './App.css'
import './components/reset.css'
import Form from './components/Form';
import Tasks from './components/Tasks'

function App() {
  const [comentarios, setComentarios] = React.useState([])
  function addComentario(comentario) {
    setComentarios((comentarios) => [...comentarios, comentario])
  }

  return (
    <div>
      <Form addComentario={addComentario} />
      <div className='coments-container'>
        <Tasks comentarios={comentarios} setComentarios={setComentarios} />
      </div>
    </div>
  );
}

export default App;
