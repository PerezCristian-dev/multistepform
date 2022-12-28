import React from 'react'
import logo from "../assets/logo.png"

export const NavBar = () => {
  return (
    <nav className='navbar px-8'>
        <img className="nav__logo" src={logo} alt="logo" />
        <ul className='navbar__container'>
            <li className='navba_item'>Home</li>
            <li className='navba_item'>About Us</li>
            <li className='navba_item'>Services</li>
            <li className='navba_item'>Contact</li>
            <div className='btnblue'> Sing In </div>
            <div className='btnlight'> Sing Up </div>
        </ul>
    </nav>
  )
}
