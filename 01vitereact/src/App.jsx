import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 5
  const [counter, setCounter] = useState(14);

  const addValue = () => {
    // setCounter(counter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    //  15 batch baneke jaega
  }

  return (
    <>
      <h2>Pratice React</h2>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button>Remove value</button>
    </>
  )
}

export default App
