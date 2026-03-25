import React from 'react'

const Navbar = (props) => {
  return (
    <div className='bg-emerald-400 mb-1 flex items-center justify-between text-white p-4'>
        <h1>{props.title}</h1>
        <div className='flex gap-20'>
            {props.links.map(function(elem,index){
                return <span key={index}>{elem}</span>
            })}
        </div>
    </div>
  )
}

export default Navbar
