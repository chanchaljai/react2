import React from 'react'

const Card = (props) => {
 
  
  return (
    <div>
        <div className='bg-white text-black inline-block text-center px-3 py-2'>
          <img className='h-32 w-32 rounded-full m-auto mb-3' src={props.profilePic} alt="" />
          <h1 className='text-2xl font-semibold mb-1'>{props.name}</h1>
          <h3 className='text-blue-700 test-xs'>{props.profession}</h3>
          <h2>{props.city}, {props.age}</h2>
          <button className='bg-blue-700 text-white rounded p-1 text-sm hover:cursor-pointer mt-3'>Add Friend</button>

        </div>
    </div>
  )
}

export default Card