import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/Untitled-design-6-300x100.png";
import './Navbar.css';

const Navbar = () => {


  return (
    <div class="navbar fixed z-50 bg-[#003144]">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact text-white dropdown-content mt-3 p-2 shadow bg-[#003144] rounded-box w-52">
          <li><NavLink to='/' className={({isActive}) => isActive ? 'bg-[#FD5D14]' : 'hover:bg-[#FD5D14]'}>Home</NavLink></li>
          <li className='hover:bg-[#FD5D14]'><NavLink  to='/about'  className={({isActive}) => isActive ? 'bg-[#FD5D14]' : 'hover:bg-[#FD5D14]'}>About Us</NavLink></li>
          <li className='hover:bg-[#FD5D14]'><NavLink to='/contact'  className={({isActive}) => isActive ? 'bg-[#FD5D14]' : 'hover:bg-[#FD5D14]'}>Contact Us</NavLink></li>
          <li className='hover:bg-[#FD5D14]'><NavLink to='/service'  className={({isActive}) => isActive ? 'bg-[#FD5D14]' : 'hover:bg-[#FD5D14]'}>Our Service</NavLink></li>
          <li className='hover:bg-[#FD5D14]'><NavLink to='/privacy'  className={({isActive}) => isActive ? 'bg-[#FD5D14]' : 'hover:bg-[#FD5D14]'}>Privacy Policy</NavLink></li>
            
            <li tabindex="0">
              <a class="justify-between">
                Media
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
              </a>
              <ul class="p-2">
                <li className='hover:bg-[#FD5D14]'><a>Blog</a></li>
                <li className='hover:bg-[#FD5D14]'><a>Event</a></li>
                <li className='hover:bg-[#FD5D14]'><a>Faq</a></li>
              </ul>
            </li>

          </ul>
        </div>
        <a href='/' class="">
          <img src={logo} alt="" />
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal text-white">
        <li><NavLink to='/' className={({isActive}) => isActive ? 'bg-[#FD5D14]' : 'hover:bg-[#FD5D14]'}>Home</NavLink></li>
          <li className='hover:bg-[#FD5D14]'><NavLink  to='/about'  className={({isActive}) => isActive ? 'bg-[#FD5D14]' : 'hover:bg-[#FD5D14]'}>About Us</NavLink></li>
          <li className='hover:bg-[#FD5D14]'><NavLink to='/contact'  className={({isActive}) => isActive ? 'bg-[#FD5D14]' : 'hover:bg-[#FD5D14]'}>Contact Us</NavLink></li>
          <li className='hover:bg-[#FD5D14]'><NavLink to='/service'  className={({isActive}) => isActive ? 'bg-[#FD5D14]' : 'hover:bg-[#FD5D14]'}>Our Service</NavLink></li>
          <li className='hover:bg-[#FD5D14]'><NavLink to='/privacy'  className={({isActive}) => isActive ? 'bg-[#FD5D14]' : 'hover:bg-[#FD5D14]'}>Privacy Policy</NavLink></li>
          <li className='hover:bg-[#FD5D14]' tabindex="0">
            <a>
              Media
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul class="p-2 bg-[#003144]">
              <li className='hover:bg-[#FD5D14]'><a>Blog</a></li>
              <li className='hover:bg-[#FD5D14]'><a>Event</a></li>
              <li className='hover:bg-[#FD5D14]'><a>Faq</a></li>
            </ul>
          </li>

        </ul>
      </div>
      <div class="navbar-end mr-10">
        <a href='/service' class="btn text-white bg-[#FD5D14] hover:bg-[#cf4c10]">Publisher</a>

        <div class="pl-5">
          <a href='/service' class="btn text-white bg-[#FD5D14] hover:bg-[#cf4c10]">Advertiser</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;