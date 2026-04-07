import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className='flex justify-between px-8 py-4 bg-pink-900 '>
        <h2>VproTech Digital</h2>
         <input className='border-2 rounded' type="text" placeholder='Search' />
        <div className='flex gap-8'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/product">Product</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar
