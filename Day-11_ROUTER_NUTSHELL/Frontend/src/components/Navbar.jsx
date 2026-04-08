import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between m-5 p-5 bg-gray-400 rounded-lg'>
            <h1 className='font-semibold text-xl'>Shreiyans Coding School</h1>
            <input className='border-2 rounded-xl w-100 text-center ' type="text" placeholder='Search....' />
            <div className='flex gap-10  active:cursor-pointer decoration-none'>
                <NavLink
                    to="/"
                    style={({isActive})=>({
                        color:isActive ? "red" :"white"
                    })}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/about"
                     style={({isActive})=>({
                        color:isActive ? "red" :"white"
                    })}

                >
                    About
                </NavLink>

                <NavLink
                    to="/courses"
                     style={({isActive})=>({
                        color:isActive ? "red" :"white"
                    })}
                >
                    Courses
                </NavLink>

                <NavLink
                    to="/contact"
                     style={({isActive})=>({
                        color:isActive ? "red" :"white"
                    })}
                >
                    Contact
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar
