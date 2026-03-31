import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState("")
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(name)
    setName("")


  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <form className='flex flex-col gap-2' onSubmit={submitHandler}>
        <input className='bg-gray-200 rounded border border-gray-400 p-2' type="text" placeholder='Enter Your Name'
          value={name} onChange={(e)=>{setName(e.target.value)}}
           
          />
        <button className='bg-green-500 rounded text-white p-2' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App