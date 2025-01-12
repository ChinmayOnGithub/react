import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  // let counter = 15;

  const addValue = () => {
    // React updates DOM in batches and not immediately. Hence using callback so that it has to update the DOM to go to next step
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chinmay {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>
        Add Value
      </button> {" "}

      <button
        onClick={removeValue}>
        remove value
      </button>


      <p>footer: counter: {counter}</p>
    </>
  )
}

export default App
