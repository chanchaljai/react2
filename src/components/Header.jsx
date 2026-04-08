import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Header = () => {
  const username = useContext(DataContext)
  return (
    <div className='flex justify-between px-6 py-2 bg-amber-300'>
      <h1 className='text-2xl font-bold '>Logo</h1>
      <div className='flex gap-4 font-semibold hover:underline'>
        <a className='hover:scale-104 hover:text-red-600' href="">Home</a>
        <a className='hover:scale-104 hover:text-red-600' href="">About</a>
        <a className='hover:scale-104 hover:text-red-600' href="">Services</a>
        <a className='hover:scale-104 hover:text-red-600' href="">Contact us</a>
      </div>
    </div>
  )
}

export default Header