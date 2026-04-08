import React, { useContext } from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import { DataContext } from './context/UserContext'


const App = () => {
  const data = useContext(DataContext)
  console.log(data);
  return (
    <div>
      <Header />
      
    </div>
  )
}

export default App