import React, { useEffect } from 'react';
import tower from "../../assets/towers.png";
import './Banner.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (

    <div class="hero min-h-screen banner">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={tower} class="max-w-sm rounded-lg shadow-2xl" alt='tower' />
    <div className='text-white'>
      <h1 class="lg:text-5xl md:text-3xl sm:text-2xl font-bold">THE SMART PATH FOR BRAND SUCCESS</h1>
      <p class="py-6 lg:text-3xl md:text-2xl sm:text-xl">Digital Market Media is the most trusted provider of inbound calls and leads for insurance, financial services, and other industries.Gain access to a huge portfolio of direct offers and exclusives! Place your offer on our network and reach thousands of publishers!</p>
      <button class="btn btn-primary lg:px-32 font-medium text-white border-2 border-blue py-4 group relative flex items-center overflow-hidden">
      <span className='absolute left-0 w-full h-0 transition-all bg-blue opacity-100 group-hover:h-full group-hover:top-0 duration-400 ease'></span>
      <span className='absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease'>
        <svg className="w-5 h-5" fill="none" stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path
          strokeLinecap='round'
          stroke-strokeLinejoin='round'
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
        <span className='relative'>Get Started</span>
      </button>
    </div>
  </div>
</div>
  )
}

export default Banner