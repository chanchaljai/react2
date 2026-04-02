import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='flex items-center justify-between py-2 px-8 bg-emerald-500'>
        <h2 className='text-2xl'>Chanchal Jaiswal</h2>
        <div className='flex gap-8 items-center'>
          <a className='text-xl' href="#">About</a>
          <a className='text-xl' href="#">Servises</a>
          <a className='text-xl' href="#">Contact</a>
          <a className='text-xl' href="#">Home</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar