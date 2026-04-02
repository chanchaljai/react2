import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <div className='p-10'>
        <Card user={{name: 'chanchal', surname: 'jaiswal', city: 'motihari', age: 30}}  />
      </div>
    </div>
  )
}

export default App