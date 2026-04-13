import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Footer = () => {

  const data=useContext(UserDataContext)
  return (
    <div className='absolute bottom-0 w-full h-10 bg-emerald-600'>
      <h1>This is Footer {data}</h1>
    </div>
  )
}

export default Footer
