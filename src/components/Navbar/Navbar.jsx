import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
            <span className='logo'>Booking</span>
            <div className='navItems'>
                <button className="navButton">Resister</button>
                <button className="navButton">Log in</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
