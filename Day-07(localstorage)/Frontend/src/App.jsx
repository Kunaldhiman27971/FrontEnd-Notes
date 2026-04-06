import React from 'react'
import { useState } from 'react'
import Card from './Components/card'

const App = () => {

  const [username, setusername] = useState("")
  const [Role, setRole] = useState("")
  const [ImageURL, setImageURL] = useState("")
  const [Description, setDescription] = useState("")

  const localUsers= JSON.parse(localStorage.getItem("allusers")) || []
  const [allUsers, setallUsers] = useState(localUsers)

// this function will handle the form submission and it will add the new user to the allUsers array and then it will reset the form fields
  const handleSubmit = (e) => {
    e.preventDefault()
    const oldUsers=([...allUsers])
    oldUsers.push({ username, Role, ImageURL, Description })
    setallUsers(oldUsers)
    localStorage.setItem("allusers",JSON.stringify(oldUsers))
    setusername("")
    setRole("")
    setImageURL("")
    setDescription("")
  }


  // this function will take the index of the user to be deleted and then it will create a copy of the allUsers array and then it will remove the user at the given index and then it will update the state with the new array
  const deleteUser=(idx)=>{

    const oldUsers = [...allUsers]
    oldUsers.splice(idx,1)
    setallUsers(oldUsers)
  }

  return (
    <div className='h-screen bg-black text-white'>
      <form
        onSubmit={(e) => {
          handleSubmit(e)
          console.log([username, Role, ImageURL, Description])
        }}
        className='flex flex-wrap px-2 py-2'>

        <input
          value={username}
          onChange={(e) => {
            setusername(e.target.value)
          }}
          className='border-2 px -5 py-2 font-semibold text-xl rounded-l m-2 w-[48%] '
          type="text"
          placeholder='Enter your name'
          required={true}
        />

        <input
          value={ImageURL}
          onChange={(e) => {
            setImageURL(e.target.value)
          }}
          className='border-2 px -5 py-2 font-semibold text-xl rounded-l m-2 w-[48%] '
          type="text"
          required={true}
          placeholder='Image URL' />

        <input
          value={Role}
          onChange={(e) => {
            setRole(e.target.value)
          }}
          className='border-2 px -5 py-2 font-semibold text-xl rounded-l m-2 w-[48%] '
          type="text"
          required={true}
          placeholder='Enter your role' />

        <input
          value={Description}
          onChange={(e) => {
            setDescription(e.target.value)
          }}
          className='border-2 px -5 py-2 font-semibold text-xl rounded-l m-2 w-[48%] '
          type="text"
          required={true}
          placeholder='Enter Description' />

        <button
          className='px -5 py-2 rounded-xl m-2 w-[97.5%] active:scale-98 bg-emerald-500 '>Create User</button>
      </form>
      <div
        className='flex flex-wrap gap-2 px-8 py-4'>
        {allUsers.map((elem, idx) => {
          return <div key={idx} className='w-[18.25vw] lg:bg-green-300 bg-white text-center p-7 flex flex-col items-center text-black rounded-xl'>
            <img
              className='h-20 w-20 rounded-full object-center object-cover'
              src={elem.ImageURL} alt="" />
            <h1 className='text-xl font-semibold mt-3'>{elem.username}</h1>
            <h5 className='text-lg text-blue-500 font-semibold my-3' >{elem.Role}</h5>
            <p className='text-small font-medium leading-tight'>{elem.Description}</p>
            <button onClick={()=>{
              deleteUser(idx)
            }} className='px-3 py-2 rounded-xl bg-red-500 text-white font-semibold mt-3 cursor-pointer active:scale-98'>Remove</button>

          </div>
        })}


      </div>
    </div>
  )
}

export default App
