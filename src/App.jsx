import React from 'react'




const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md space-y-4 w-full max-w-md">
        <input
          className="w-full px-4 py-3 border border-gray-300 rounded"
          type="text"
          placeholder="Enter Your Name"
        />
        <button
          className="w-full px-4 py-3 bg-gray-400 text-white rounded hover:bg-gray-500 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default App