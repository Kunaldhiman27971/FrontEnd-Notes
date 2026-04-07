import React from 'react'
import { useParams } from 'react-router-dom'

const Cohort1 = () => {
    const params=useParams()
    console.log(params)
  return (
    <div>
      <h1 className='text-5xl underline font-bold fixed top-[10vw] left-[50vw] -translate-1/2'>
      {` ${params.id}Course  Page`}
      </h1>
    </div>
  )
}

export default Cohort1
