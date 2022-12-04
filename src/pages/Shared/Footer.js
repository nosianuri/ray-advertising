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
    <span class="footer-title text">Services</span> 
    <a class="link link-hover">Pay Per Call</a> 
    <a class="link link-hover">Lead Genaration</a> 
    <a class="link link-hover">Affiliate Network</a> 
    <a class="link link-hover">Brand & Safty</a>
  </div> 
  <div>
    <span class="footer-title">Company</span> 
    <a href='/about' class="link link-hover">About us</a> 
    <a href='/expertise' class="link link-hover">Expertise</a> 
    <a href='/contact' class="link link-hover">Contact</a> 
    <a href='/privacy' class="link link-hover">Privacy Policy</a>
  </div> 
  <div>
    <span class="footer-title">Support</span> 
    <a class="link link-hover">Press Kit</a> 
    <a class="link link-hover">Disclaimer</a> 
    <a href="tel:+14356251961" class="link link-hover">Call Us</a>
  </div>

  
</footer>
<footer class="footer footer-center p-4 bg-base-300 text-base-content">
  <div>
    <p>Copyright© 2022 Ray Advertising LLC | All rights reserved</p>
  </div>
</footer>
    </div>
  )
}

export default Footer;