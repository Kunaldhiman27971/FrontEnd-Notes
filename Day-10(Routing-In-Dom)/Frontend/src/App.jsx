import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import RandomAbout from './pages/RandomAbout'
import Courses from './pages/Courses'
import Cohort1 from './pages/Cohort1'


const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        //Dynamic Routes
        <Route path="/about/:id" element={<RandomAbout />} />  // Dynamic route for about page with an ID parameter
        <Route path="/courses" element={<Courses />} />
         //Nested Dynamic Route for courses with an ID parameter
        <Route path="/courses/:id" element={<Cohort1 />} />


      </Routes>
    </div>
  )
}

export default App
