import { useState } from 'react'

import './App.css'

function App() {
  const [conteo, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <h1>Estado 1, eliminando el template de VITE</h1>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((conteo) => conteo + 1)}
        >
         clicks {conteo}
        </button>
      </section>
    </>
  )
}

export default App
