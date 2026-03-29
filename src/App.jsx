import React from 'react'

function App() {

    const abc = ()=> {
        console.log("hello")
    }
    


  const user = "jaiswal"
  return (
    <div className='main'>my user name is {user}

      <button onClick={abc}>change User</button>
    </div>
  )
}

export default App