import React, { useState } from 'react'

const App = () => {
  const [a, setA] = useState(10)

  const changeA = () => {
    console.log("chal gaya")
    setA(a + 1)
  }
  return (
    <div>value of a is {a} 
    <button onClick={changeA}>change A</button>
    </div>
  )
}

export default App