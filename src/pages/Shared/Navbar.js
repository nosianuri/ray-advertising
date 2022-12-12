import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/Artboard.png";
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
    <div className='border-solid border-2 border-gray-300'>
      <div className='lg:px-16 md:px-10 py-2'>
        <div className="navbar bg-white z-50">
          <div className="navbar-start">
            <div className="dropdown ">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                {menuItems}
              </ul>
            </div>
            <a href='/' class="normal-case">
              <img className='object-fill'  src={logo} alt="" />
            </a>
          </div>
          <div class="navbar-center hidden lg:flex ">
            <ul class="menu menu-horizontal p-0">
              {menuItems}
            </ul>
          </div>
          <div class="navbar-end">
            <a href="" class="btn bg-secondary get-btn text-white rounded-full"><i class="fa-solid fa-phone pr-2"></i> Get Started </a>
            <a href="tel:+14356251961"><i class="fa-solid fa-phone-volume text-3xl text-[#FFD124]"></i></a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;