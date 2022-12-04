import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/Ray-Logo-white.png";
import './Navbar.css';

const Navbar = () => {

    const menuItems = <>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/expertise">EXPERTISE</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      <li><Link to="/privacy">PRIVACY</Link></li>
    </>
  return (
    <div className="navbar bg-primary z-50 fixed py-5 px-8">
  <div className="navbar-start">
    <div className="dropdown text-white">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
      {menuItems}
      </ul>
    </div>
    <a href='/' class="btn btn-ghost normal-case">
        <img width="100" src={logo} alt="" />
    </a>
  </div>
  <div class="navbar-center hidden lg:flex text-white">
    <ul class="menu menu-horizontal p-0">
    {menuItems}
    </ul>
  </div>
  <div class="navbar-end ">
    <a href="tel:+14356251961" class="btn bg-secondary text-white"><i class="fa-solid fa-phone pr-2"></i> Call Us </a>
  </div>
</div>
  )
}

export default Navbar;