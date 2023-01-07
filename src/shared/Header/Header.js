import React, { Component, useState } from 'react';
import './Header.css';
import logo from '../../assets/Artboard.png';

const Header = () => {
  // state = { clicked: false };

  // handleClick = () => {
  //   this.setState({ clicked: !this.state.clicked })
  // }
  let Links = [
  { name: "HOME", link: "/" },
  { name: "ABOUT", link: "/about" },
  { name: "EXPERTISE", link: "/expertise" },
  { name: "CONTACT", link: "/contact" },
  { name: "PRIVACY", link: "/privacy" },
];
let [open, setOpen]= useState(false);

return (
  <div className='middle-header py-7'>
    <div className='lg:flex lg:justify-between mx-auto lg:px-32'>
      <div className='flex '>
        <div>
          <a className='mt-3 justify-center align-middle' href="/"><img className='' width={100} src={logo} alt="" /></a>
        </div>

        <div onClick={()=>setOpen(!open)} className='lg:hidden md:hidden absolute right-8 top-8 cursor-pointer'>
        
          <i name={open ? 'close':'menu'} class="fa-solid fa-bars"></i>
        </div>
        <ul className={`lg:hidden md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-490px]'}`}>
          {
            Links.map((link)=>(
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))
          }
        </ul>
      </div>

      <div className='flex gap-10 border-dashed py-3 px-8 border-2 border-gray-300'>
        <div className='lg:flex'>
          <img className='pr-3' src="https://i.ibb.co/NyFrGBP/credit-carts-header.png" alt="" />
          <h2>800 Bill to <br />
            <span className='text-semibold !text-sm'>Credit Card </span><span className='text-xs'>TM</span></h2>
        </div>
        <div className='lg:flex'>
          <img className='pr-3 ' src="https://i.ibb.co/QHh8DKn/setting-header.png" alt="" />
          <h2>24 Hr <br />
            <span className='text-semibold text-sm'>Guaranteed Setup Time</span></h2>
        </div>
      </div>

      <div className='mt-3 text-center'>
        <button className='btn bg-[#FF4B1B] hover:bg-[#FF724D] text-white '>Get Started</button>
        <p className='text-xs'>Get started for more Info</p>
      </div>
    </div>

  </div>
)
  }


export default Header