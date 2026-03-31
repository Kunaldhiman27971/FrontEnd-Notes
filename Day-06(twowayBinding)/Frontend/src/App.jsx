// Form Handling in React

import React from 'react'
import { useState } from 'react'


const App = () => {

  const [username, setusername] = useState("")

  const [allusers, setallusers] = useState([''])

  function handleSubmit(e){
    e.preventDefault()
    setallusers([...allusers, username])
    setusername("")
  }


  return (
    <div>
      <form onSubmit={(e)=>{
        handleSubmit(e)
      }}
       className='p-5 flex flex-col gap-5 w-fit'>


        <input 
        className="bg-black rounded-2xl p-2 text-white w-fit" 
        type="text " placeholder='Enter Name'
        value={username}
        required={true}
        onChange={(e)=>{
          setusername(e.target.value)
        }}/>


        <button className='bg-black rounded-2xl p-2 text-white w-fit '>Submit</button>
      </form>

      <div>
        {allusers.map((elem,index)=>{
          return <h1 key={index}>{elem}</h1>
        })}
      </div>
    </div>
  )
}

export default App

