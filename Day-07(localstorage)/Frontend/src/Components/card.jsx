import React from 'react'

const Card = () => {
  return (
    <div className='w-[18.25vw] lg:bg-green-300 bg-white text-center p-7 flex flex-col items-center text-black rounded-xl'>
      <img
        className='h-20 w-20 rounded-full'
        src="https://images.unsplash.com/photo-1771212952256-31a72d974757?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" />

      <h1 className='text-xl font-semibold mt-3'>Kun Dhiman</h1>
      <h5 className='text-lg text-blue-500 font-semibold my-3' >Developer</h5>
      <p className='text-small font-medium leading-tight'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, porro.</p>
      <button className='px-3 py-2 rounded-xl bg-red-500 text-white font-semibold mt-3 cursor-pointer active:scale-98'>Remove</button>

    </div>
  )
}

export default Card
