import React from 'react';
import './Navbar.css';
import { NavLink } from "react-router-dom";

const Navbar = (props) => (
  <nav className={`nav ${props.bc}`}>
    <NavLink className='link' to='/'>
      <div className='item'>Profile</div>
    </NavLink>
    <NavLink className='link' to='/dialogs'>
      <div className='item'>Messages</div>
    </NavLink>
    <NavLink className='link' to='/news'>
      <div className='item'>News</div>
    </NavLink>
    <NavLink className='link' to='/music'>
      <div className='item'>Music</div>
    </NavLink>
    <NavLink className='link' to='/settings'>
      <div className='item'>Settings</div>
    </NavLink>
  </nav>
);


export default Navbar;