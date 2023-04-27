import React, { Component } from 'react';
import './Navbar.css';
import logo from '../../assets/raywhitelogo.png';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <div>
        <div className='fixed z-50  w-full'>
          <nav className='py-2 lg:px-20 px-10'>
            <a className='py-3' href="/">
              <img className='w-[100px] lg:w-[160px]' src={logo} alt="Logo" />
            </a>

            <div>
              <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
                <li className='uppercase ml-2'>
                  <a className='' href="/">Home</a></li>
                <li className='uppercase ml-2'><a href="/about">About Us</a></li>
                <li className='uppercase ml-2'><a href="/contact">Contact Us</a></li>
                <li className='uppercase ml-2'><a href="/service">Our Service</a></li>
                <li className='uppercase ml-2'><a href="/career">Career</a></li>
                <li className='uppercase ml-2'><a>
                  <div class="dropdown dropdown-hover">
                    <label tabindex="0" class=" m-1">Media</label>
                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-[#032738] rounded-box ">
                      <li className=''><a href='/#'>Blog</a></li>
                      <li className=''><a href='/#'>Event</a></li>
                      <li className=''><a href='/#'>Faq</a></li>
                    </ul>
                  </div></a></li>
              </ul>
            </div>

            <div className='uppercase  flex gap-5 hidden md:hidden lg:block'>
              <h2 className='btn text-md mr-5 hover:bg-[#45f3ff] bg-[#45f3ff]' padding="10px 10px"
                border-color="#e64100"
                width="100%"
                fontSize="16px"
                variant="outline-light"
                id="action-bttn"><a className='navbtn text-[#12232E] hover:text-[#12232E] font-[900]' href="https://rayadvertising.everflowclient.io/affiliate/signup">Publisher</a></h2>
              <h2 className='btn text-md  bg-[#45f3ff] hover:bg-[#45f3ff]'
                padding="10px 10px"
                border-color="#e64100"
                width="100%"
                fontSize="16px"
                variant="outline-light"
                id="action-bttn"><a className='navbtn text-[#12232E] hover:text-[#12232E] font-[900]' href="https://rayadvertising.everflowclient.io/advertiser/signup">Advertiser</a></h2>
            </div>

            <div id='mobile' onClick={this.handleClick}>
              <i id='bar' className={this.state.clicked ? "fa-solid fa-times" : "fas fa-bars"}></i>

            </div>
          </nav>
        </div>
      </div>
    )
  }

}

export default Navbar;