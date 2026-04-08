import React from 'react'
import { Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
      
        <div className='bg-red-400 flex gap-5 wrap-nowrap overflow-hidden'>
          <p className='flex shrink-0'>Sale is live!!! flat 50% off on all courses  </p><p className='flex shrink-0'>Sale is live!!! flat 50% off on all courses  </p><p className='flex shrink-0'>Sale is live!!! flat 50% off on all courses  </p><p className='flex shrink-0'>Sale is live!!! flat 50% off on all courses  </p><p className='flex shrink-0'>Sale is live!!! flat 50% off on all courses  </p><p className='flex shrink-0'>Sale is live!!! flat 50% off on all courses  </p><p className='flex shrink-0'>Sale is live!!! flat 50% off on all courses  </p><p className='flex shrink-0'>Sale is live!!! flat 50% off on all courses  </p><p className='flex shrink-0'>Sale is live!!! flat 50% off on all courses  </p><p className='flex shrink-0'>Sale is live!!! flat 50% off on all courses  </p><p className='flex shrink-0'>Sale is live!!! flat 50% off on all courses  </p><p className='flex shrink-0'>Sale is live!!! flat 50% off on all courses  </p>
        </div>

      <Outlet />
    </div>
  )
}

export default Courses
