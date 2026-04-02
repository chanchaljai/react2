import React from 'react'

const Card = (props) => {
    console.log(props.a)
  return (
    <div className='text-white text-3xl'>
        <h1>Username is {props.a} </h1>
        </div>
  )
}

export default Card