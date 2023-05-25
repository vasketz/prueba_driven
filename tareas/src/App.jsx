import { useState } from 'react'
import { Tarjeta } from './components/Tarjeta'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tarjeta
        name='Tarea #1'
        submit='Hacer tarea #1'
      />

      <Tarjeta
        name='Tarea #2'
        submit='Hacer tarea #2'
      />
      <Tarjeta
        name='Tarea #3'
        submit='Hacer tarea #3'
        submit1='hacer tarea 3.1'
        submit2='hacer tarea 3.2'
      />
      <Tarjeta
        name='Tarea #4'
        submit='Hacer tarea #4'
      />
      <Tarjeta
        name='Tarea #5'
        submit='Hacer tarea #5'
      />
      <Tarjeta
        name='Tarea #6'
        submit='Hacer tarea #6'
      />
    </>
  )
}

export default App
