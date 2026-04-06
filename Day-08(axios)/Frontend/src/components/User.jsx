import React from 'react'

const User = (props) => {
  return (
    <div className='h-80 w-70 rounded border-2 m-2 p-2 bg-blue-300'>
        <img src={props.elem.image} alt="" className='h-50 w-50 object-cover content-center'/>
        <h1 className='text-lg font-bold'>{`${props.elem.price} $`}</h1>
        <p className='w-fit'>{props.elem.title}</p>


    </div>
  )
}

export default User
