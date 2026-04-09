import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState("")
  const submitHandler = (e) => {
    e.preventDefault()
   const user ={
    name: e.target[0].value,
    email: e.target[1].value,
    password: e.target[2].value
   }
    
  }
  return (
    <div className="h-screen bg-gray-200 flex justify-center items-center">
      
      {/* Card */}
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          
          <input 
            className="border p-2 rounded focus:ring-2 focus:ring-blue-400"
            type="text" 
            placeholder="Enter your name" 
          />

          <input 
            className="border p-2 rounded outline-none focus:ring-2 focus:ring-blue-400"
            type="email" 
            placeholder="Enter your email" 
          />

          <input 
            className="border p-2 rounded outline-none focus:ring-2 focus:ring-blue-400"
            type="password" 
            placeholder="Enter your password" 
          />

          {/* Button */}
          <button 
            className="bg-blue-600 text-white p-2 rounded mt-2 hover:bg-blue-700"
            type="submit"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  )
}

export default App