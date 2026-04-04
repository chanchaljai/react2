import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full bg-emerald-800 text-white px-10 py-7 flex justify-between items-center'>
        <h2 className='text-3xl'>Chanchal Jaiswal</h2>
        <div className='flex gap-10'>
           <Link className='text-xl underline' to="/">Home</Link>
           <Link className='text-xl underline' to="/about">About</Link>
           <Link className='text-xl underline' to="/product">Product</Link>
           <Link className='text-xl underline' to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Header