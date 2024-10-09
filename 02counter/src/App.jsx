import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  //any value can be passed
  //useState(true)
  // useState('');
  // useState([])
  // useState({})

  //let counter = 15;

  const addValue = () => {
    // console.log("clicked", Math.random());

    counter = counter + 1;
    console.log("clicked", counter);
    setCounter(counter);
    //OR
    // setCounter(counter + 1)

  }

  const removeValue = () => {
    setCounter(counter - 1)
  }


  return (
    <>

      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <p>footer: {counter}</p>
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
