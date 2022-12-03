import React, { useState } from 'react';
import './Navbar.css';
import {SiAnaconda} from "react-icons/si";
import {AiOutlineBars} from "react-icons/ai";
import {RiCloseLine} from "react-icons/ri";
import Button from '../UI/button/Button';
import "../UI/button/Button.css";
import logo from "../../assets/Ray-Logo-white.png";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
  return (

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div>


//     <div className=''>
//         <nav className=' navbar'>
//         <div className='logo'>
//         <img src={logo} alt="" />
//         {/* <SiAnaconda color='#fff' size={33} />
//         <p className='logo-text'>
//             Social<span>X</span>
//         </p> */}
//         </div>
//         <menu>
// <ul className='nav-links' id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
//     <li><a href="#">ABOUT</a></li>
//     <li><a href="#">CONTACT</a></li>
//     <li><a href="#">EXPERTISE</a></li>
//     <li><a href="#">PRIVACY POLICY</a></li>
//     {/* <li className='nav-btn'><a href="#" className='btn btn-dark'>Get Started</a></li> */}
//     <li className='nav-btn'>
//         <Button text={"Get Started"} btnClass={"btn-dark"} href={"#faq"} />
//     </li>
// </ul>
//         </menu>
//         <div className='menu-icons' onClick={toggleMenu}>
//             {
//                 showMenu ? <RiCloseLine color='#fff' size={30} /> 
//                 : 
//                 <AiOutlineBars color='#fff' size={27} />
//             }
//         </div>
//     </nav>
//     </div>
  )
}

export default Navbar