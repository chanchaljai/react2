import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div className='bg-white inline-block p-4 text-center rounded'>
        <h1>{props.user.name} {props.user.surname}</h1>
        <h2>{props.user.city}, {props.user.age}</h2>
        <button>Add Friend</button>
    </div>
  )
}

export default Card