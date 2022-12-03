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
    <div className=''>
        <nav className='container navbar'>
        <div className='logo'>
        <img src={logo} alt="" />
        {/* <SiAnaconda color='#fff' size={33} />
        <p className='logo-text'>
            Social<span>X</span>
        </p> */}
        </div>
        <menu>
<ul className='nav-links' id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
    <li><a href="#">ABOUT</a></li>
    <li><a href="#">CONTACT</a></li>
    <li><a href="#">EXPERTISE</a></li>
    <li><a href="#">PRIVACY POLICY</a></li>
    {/* <li className='nav-btn'><a href="#" className='btn btn-dark'>Get Started</a></li> */}
    <li className='nav-btn'>
        <Button text={"Get Started"} btnClass={"btn-dark"} href={"#faq"} />
    </li>
</ul>
        </menu>
        <div className='menu-icons' onClick={toggleMenu}>
            {
                showMenu ? <RiCloseLine color='#fff' size={30} /> 
                : 
                <AiOutlineBars color='#fff' size={27} />
            }
        </div>
    </nav>
    </div>
  )
}

export default Navbar