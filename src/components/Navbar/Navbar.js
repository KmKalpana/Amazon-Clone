import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='nav'>
      <NavLink to='/'>
        <li>Home</li>
      </NavLink>
    </nav>
  )
}
export default Navbar
