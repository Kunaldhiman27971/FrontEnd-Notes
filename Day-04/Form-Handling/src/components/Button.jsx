import React from 'react'

const Button = () => {
    function handleClick() {
        console.log("Button Clicked")
    }
    return (
        <div className='cursor-pointer active:scale-98 bg-emerald-700 rounded w-fit px-5 py-5 m-5 text-black'>
            <button className='text-xl font-bold'
                onClick={handleClick}>
                Click to Download</button>
        </div>
    )
}

export default Button
