import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './ShortNav.css';

class ShortNav extends Component {
  state= { clicked: false };

  handleClick = () =>{
    this.setState({clicked:!this.state.clicked})
  }
  render() {
  return (
    <div className='py-2 lg:block md:block hidden'>
        <div className='flex gap-10 pl-32 '>
        <ul className={this.state.clicked ? "#navbar active" : "#navbar"} id='navbar'>
        <li className=' text-sm border-2 border-white  border-r-gray-500 '><a className='text-gray-700  text-semibold text-white hover:text-[#FF4B1B] ' href='/'>Home</a></li>
        <li className=' text-sm border-2 border-white  border-r-gray-500 '><a className='text-gray-700 text-bold text-white hover:text-[#FF4B1B]' href='/'> 800 Bill to credit card</a></li>
        <li className=' text-sm border-2 border-white  border-r-gray-500 '><a className='text-gray-700 text-white hover:text-[#FF4B1B]' href='/about'>About us</a></li>
        <li className=' text-sm border-2 border-white  border-r-gray-500 '><a className='text-gray-700 text-white hover:text-[#FF4B1B]' href='/'>Why Us</a></li>
        <li className=' text-sm border-2 border-white border-r-gray-500 '><a className='text-gray-700 text-white hover:text-[#FF4B1B]' href='/'>Earnings Potential</a></li>
        <li className=' text-sm border-2 border-white  border-r-gray-500 '><a className='text-gray-700 text-white hover:text-[#FF4B1B]' href='/'>Faq</a></li>
        <li className=' text-sm border-2 border-white  border-r-gray-500 '><a className='text-gray-700 text-white hover:text-[#FF4B1B]' href='/contact'>Contact Us</a></li>
        <li className=' text-sm border-2 border-white  border-r-gray-500 '><a className='text-gray-700 text-white hover:text-[#FF4B1B]' href='/'>Call Us</a></li>
        </ul>
    </div>
    </div>
  )
}
}

export default ShortNav