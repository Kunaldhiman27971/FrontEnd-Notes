import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Kodr from './pages/Kodr'
import Contact from './pages/Contact'
import Kodex from './pages/Kodex'
import Allcourses from './pages/Allcourses'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={< About />} />
          <Route path='/courses' element={<Courses />}>
            <Route path='/courses' element={<Allcourses />} />
            <Route path='/courses/kodex' element={<Kodex />} />
            <Route path='/courses/kodr' element={<Kodr />} />
          </Route>
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
