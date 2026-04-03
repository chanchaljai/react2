import React from 'react'
import Ex2 from './Ex2'

const Ex = (props) => {
  return (
    <>
    <div className='text-white text-2xl'>Ex Page {props.name}</div>
    <Ex2 user = {props.name}/>
    
    </>
  )
}

export default Ex