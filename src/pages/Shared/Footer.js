import React from 'react';
import logo from "../../assets/Ray-Logo-white.png";

const Footer = () => {
  return (
    <div>
        <footer class="footer p-10 bg-primary text-white">
  <div>
  <img width="100" src={logo} alt="" />
    <p>Ray Advertising LLC<br/>Providing reliable tech since 2019</p>
  </div> 
  <div>
    <span class="text-lg text-[#FFD124]">Services</span> 
    <a class="link link-hover hover:text-[#FFD124]"><i class="fa-solid fa-caret-right pr-3 text-[#FFD124]"></i>Pay Per Call</a> 
    <a class="link link-hover hover:text-[#FFD124]"><i class="fa-solid fa-caret-right pr-3 text-[#FFD124]"></i>Lead Genaration</a> 
    <a class="link link-hover hover:text-[#FFD124]"><i class="fa-solid fa-caret-right pr-3 text-[#FFD124]"></i>Affiliate Network</a> 
    <a class="link link-hover hover:text-[#FFD124]"><i class="fa-solid fa-caret-right pr-3 text-[#FFD124]"></i>Brand & Safty</a>
  </div> 
  <div>
    <span class="text-lg text-[#FFD124]">Quick Links</span> 
    <a href='/about' class="link link-hover hover:text-[#FFD124]"><i class="fa-solid fa-caret-right pr-3 text-[#FFD124]"></i>About us</a> 
    <a href='/expertise' class="link link-hover hover:text-[#FFD124]"><i class="fa-solid fa-caret-right pr-3 text-[#FFD124]"></i>Expertise</a> 
    <a href='/contact' class="link link-hover hover:text-[#FFD124]"><i class="fa-solid fa-caret-right pr-3 text-[#FFD124]"></i>Contact</a> 
    <a href='/privacy' class="link link-hover hover:text-[#FFD124]"><i class="fa-solid fa-caret-right pr-3 text-[#FFD124]"></i>Privacy Policy</a>
  </div> 
  <div>
    <span class="text-lg text-[#FFD124]">Our Company</span> 
    <div><i class="fa-solid fa-location-dot pr-2 text-[#FFD124]"></i> Redding, California, USA</div>
        <div className=''><a className='hover:text-[#FFD124]' href="tel:+14356251961"><i class="fa-solid fa-square-phone pr-2 text-[#FFD124]"></i>(435) 625-1961</a></div>
    <div><i class="fa-solid fa-envelope pr-2 text-[#FFD124]"></i>@rayadvertising.com</div>
  </div>

  
</footer>
 
<footer class="  p-4 bg-primary text-base-content ">
<div className='border-t border-base-300'>
<div className='flex justify-between m-4 pt-5 px-5'>
    
<div className=' text-white text-sm'>
    <p>Copyright© 2022 Ray Advertising LLC | All rights reserved</p>
  </div>
    <div className='text-white'>Follow Us: <span className='text-lg '>
    <a href="https://www.facebook.com/rayadvertisingllc/"><i class="fa-brands fa-facebook pl-3 text-[#FFD124]"></i></a>
    
    <a href="https://www.linkedin.com/company/rayadvertising"><i class="fa-brands fa-linkedin  text-[#FFD124]"></i></a>
    
    <i class="fa-brands fa-twitter  text-[#FFD124]"></i>
    </span></div>
    </div>

  
  </div>
</footer>
    </div>
  )
}

export default Footer;