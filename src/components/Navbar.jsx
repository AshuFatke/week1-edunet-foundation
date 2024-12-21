import React from 'react'
import Welcome from '../Pages/Welcome'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  
  const dirHome = () => {
    navigate('/');

  }
    
  return (
    <nav className="navbar bg-ring-blue-500">
      <div className="navbar-logo">
        
        <span onClick={dirHome} className="company-name hover:cursor-pointer">CallBasket</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/Home"> Home</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Signup">Sing Up</Link> </li>
        <li className='Login'> <Link to="/Login">Login</Link> </li> 
      </ul>
    </nav>
    

    
  )
}

export default Navbar
