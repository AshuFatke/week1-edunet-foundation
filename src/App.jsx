import React from 'react'
import Navbar from './components/Navbar'
import Welcome from './Pages/Welcome'
import Home from './Pages/Home'
import UserSignup from './Pages/UserSignup'
import UserLogin from './Pages/UserLogin'
import { Route, Routes } from 'react-router-dom'
import Contact from './Pages/Contact'
import About from './Pages/About'

const App = () => {
  return (
   <>
    <Navbar/>
   <Routes>
     <Route path="/" element={<Welcome />} /> 
    <Route path="/Login" element={<UserLogin/>} />
    <Route path="/Signup" element={<UserSignup/>} />
    <Route path="/Home" element={<Home/>} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="/About" element={<About/>} />

   </Routes>
   
   </>
   
  )
}

export default App
