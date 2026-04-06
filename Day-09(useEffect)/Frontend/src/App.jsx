import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {



  const [title, settitle] = useState('')
  const [counter, setcounter] = useState(0)
   useEffect(() => {
    console.log('useEffect is running')
  },[]) //[] ye depency array hai and isme hm jo bhi value denge uske change hone par useEffect run hoga, agar empty array denge to sirf component ke mount hone par hi useEffect run hoga

  return (
    <div>
      <input type="text" value={title} onChange={(e)=>settitle(e.target.value)}  placeholder='Enter your Name' className='p-2 m-2 border-2'/>
      <h1 className='p-2  m-2 border-2 bg-emerald-700 w-fit rounded-2xl px-10 mx-13'>{counter}</h1>
      <button 
      className='p-2 m-2 border-2 bg-emerald-700 rounded-md'
      onClick={()=>setcounter(counter+1)}>Increase</button>
      <button 
      className='p-2 m-2 border-2 bg-emerald-700 rounded-md'
      onClick={()=>setcounter(counter-1)}>Decrease</button>
    </div>
  )
}

export default App





