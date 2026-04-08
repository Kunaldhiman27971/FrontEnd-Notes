import React from 'react'
import { useNavigate } from 'react-router-dom'


const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className='flex justify-between m-5 p-5 bg-gray-400 rounded-lg'>
            <h2>Footer</h2>
            <button onClick={()=>{
                navigate('/courses')
            }} className=' bg-emerald-700 p-2 rounded'>Explore Courses</button>
        </div>
    )
}

export default Footer

