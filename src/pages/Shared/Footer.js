import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='border-2'>
     {/* <div className='flex justify-center bg-[#003144]'>
    <i class="fa-sharp fa-solid fa-play rotate-90 text-[#ee6c4d] text-6xl "></i>
    </div> */}
    <div className='px-10  bg-[#032738] relative'>
    <div className='top-[-42px] left-[50%]  translate-x-[-50%] bg-[#45f3ff] w-[70px] h-[70px] footer-clip absolute '></div>
   
    <div className='h-[40px] w-[40px] relative bg-[#45f3ff] -top-[-300px] right-[100px] rotate-45 '></div>
      <div className='text-center mb-5'>
        <h1 className='lg:text-3xl text-2xl font-bold text-white'>YOUR TRUSTED PARTNER SINCE 2019</h1>
        <p className='text-white lg:text-lg mt-3 mb-10'>Made With Love 🤍 All Around The World</p>
      </div>
      <footer class="footer lg:px-32 text-white">

        <div className=''>
          <span class="lg:text-xl text-lg text-bold">CONTACT INFORMATION</span>
          <div>
          <i class="fa-solid fa-square-phone pr-2 lg:text-xl"></i>
          <a className='hover:text-[#45f3ff] lg:text-md hover:no-underline' href="tel:+14356277657">Phone: (435) 627-7657</a>
          </div>
          <div>
          <i class="fa-solid fa-envelope pr-2 lg:text-xl"></i>
          <a href='mailto:contact@rayadvertising.com' class="link link-hover hover:text-[#45f3ff] lg:text-lg hover:no-underline">contact@rayadvertising.com</a>
          </div>
          <div className='flex mb-3'>
          <i class="fa-solid fa-location-dot pr-2 lg:text-xl"></i>
          <p class="link link-hover hover:text-[#45f3ff] lg:text-sm hover:no-underline">
          1267 Willis ST STE 200 <br /> Redding CA 96001 USA
          </p>
          </div>
          

        </div>
        <div className=''>
          <span class="lg:text-xl text-lg text-bold ">COPYRIGHT</span>
          <a href='/about' class="link link-hover hover:text-[#45f3ff] lg:text-md hover:no-underline">About Us</a>
          <div className='lg:w-[200px] w-[50px] h-[1px] bg-gray-700'></div>
          <a href='/privacy-policy' class="link link-hover hover:text-[#45f3ff] lg:text-md hover:no-underline">Privacy Policy</a>
          <div className='lg:w-[200px] w-[50px] h-[1px] bg-gray-700'></div>
          <a href='/terms-condition' class="link link-hover hover:text-[#45f3ff] lg:text-md hover:no-underline">Terms & Condition</a>
          
        </div>
        <div>
          <span class="lg:text-xl text-lg text-bold  ">MEDIA</span>
          <a href='/#' class="link link-hover hover:text-[#45f3ff] lg:text-md hover:no-underline">FAQ</a>
          <div className='lg:w-[200px] w-[50px] h-[1px] bg-gray-700'></div>
          <a href='/#' class="link link-hover hover:text-[#45f3ff] lg:text-md hover:no-underline">Blog</a>
          <div className='lg:w-[200px] w-[50px] h-[1px] bg-gray-700'></div>
          <a href='/#' class="link link-hover hover:text-[#45f3ff] lg:text-md hover:no-underline">Event</a>
          
        </div>
        <div>
          <span class="lg:text-xl text-lg text-bold uppercase ">Home</span>
          <a href='/#' class="link link-hover hover:text-[#45f3ff] lg:text-md hover:no-underline">Media</a>
          <div className='lg:w-[200px] w-[50px] h-[1px] bg-gray-700'></div>
          <a href='https://rayadvertising.everflowclient.io/affiliate/signup' class="link link-hover hover:text-[#45f3ff] lg:text-md hover:no-underline">Advertisers</a>
          <div className='lg:w-[200px] w-[50px] h-[1px] bg-gray-700'></div>
          <a href='https://rayadvertising.everflowclient.io/affiliate/signup' class="link link-hover hover:text-[#45f3ff] lg:text-md hover:no-underline">Publishers</a>

        </div>

      </footer>
      <div className='lg:px-16'>
      <div className='flex lg:gap-3 gap-2 justify-center py-5 border-2 border-[#032738] border-y-gray-700 '>
        <div className=' lg:text-2xl px-2 py-1 font-semibold text-white bg-[#3b5998] rounded-lg'>
          <a href="https://www.facebook.com/rayadvertisingllc"><i class="fa-brands fa-meta text-[#fff] lg:text-2xl "></i></a>
        </div>
        <div className=' lg:text-2xl font-semibold text-white px-2 py-1 bg-[#00aff0] rounded-lg'>
          <a href="https://join.skype.com/invite/TVHXGcGIlXK6"><i class="fa-brands fa-skype  text-[#fff] lg:text-2xl "></i></a>
        </div>
        <div className='bg-[#1da1f2] px-2 py-1 rounded-lg'>
          <a href="https://mobile.twitter.com/rayadvertising"><i class="fa-brands fa-twitter  text-[#fff] lg:text-2xl "></i></a>
        </div>
        <div className='bg-[#0077b5] px-2 py-1 rounded-lg'>
          <a href="https://www.linkedin.com/company/rayadvertising"><i class="fa-brands fa-linkedin  text-[#fff] lg:text-2xl "></i></a>
        </div>
        <div className='bg-[#bd081c] px-2 py-1 rounded-lg'>
          <a href="https://www.pinterest.com/rayadvertising/"><i class="fa-brands fa-pinterest  text-[#fff] lg:text-2xl "></i></a>
          
        </div>
        <div className='bg-[#6A46C5] px-2 py-1 rounded-lg'>
          <a href="https://www.instagram.com/rayadvertisingllc/"><i class="fa-brands fa-instagram text-[#fff] lg:text-2xl "></i></a>
          
        </div>
        <div className='bg-[#35465c] px-2 py-1 rounded-lg'>
          <a href="https://www.tumblr.com/rayadvertisingllc"><i class="fa-brands fa-tumblr text-[#fff] lg:text-2xl  "></i></a>
        </div>
      </div>
      </div>
      <div className=' text-white lg:text-sm text-center lg:pl-10 py-5'>
        <p>Copyright © 2023 Ray Advertising LLC | All rights reserved</p>
      </div>
      
      </div>
      
    </div>
  )
}

export default Footer;