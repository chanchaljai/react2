import React, {  useState } from 'react'

const App = () => {
  const [a, setA] = useState(10)
  
  const increment = () => {
    setA(a + 1)
  }
  const Decrement = () => {
    setA(a - 1)
  }

  return (
    <div>
      <h2>Number is {a}</h2>
       <button onClick={increment}>Increment</button>
       <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default App