import React from 'react'

function App() {

  let user = "harsh"

  let changeUser = () => {
    console.log(user)
    user = "Aryan"
    console.log(user)
  }
  return (
    <div>username is {user}
    <button onClick={changeUser}>Change User</button>
    </div>
  )
}

export default App