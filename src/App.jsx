import React from 'react'

const App = () => {

   const submitHandler = (e)=> {
         e.preventDefault()
    }
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex flex-col gap-4 border p-6 rounded-lg" onSubmit={submitHandler}>
        
        <input 
          className="px-4 py-2 border border-gray-400 rounded"
          type="text" 
          placeholder="Enter Your Name" 
        />

        <button className="px-4 py-2 bg-green-400 rounded text-white">
          Submit
        </button>

      </form>
    </div>
  )
}

export default App