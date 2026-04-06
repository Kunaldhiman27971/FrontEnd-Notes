import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import User from './components/User'

const App = () => {
  const [allData, setallData] = useState([])

  async function getData() {
    const response=await axios.get("https://fakestoreapi.com/products")
    setallData(response.data)
    console.log(response.data)
  }
  return (
    <div className='p-2'>
      <button
      className='p-2 m-2 bg-emerald-700 border-black border-2 rounded text-white cursor-pointer active:scale-98 transition duration-200 '
      onClick={getData}>Get Data</button>
     <div className='flex flex-wrap'>
       {allData.map(function(elem){
        console.log(elem)

        return <User elem={elem}/>
      })}
     </div>
    </div>
  )
}

export default App
