import React from 'react';
import tower from "../../assets/towers.png";
import './Banner.css';

const Banner = () => {
  return (
    <div class="hero min-h-screen banner">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={tower} class="max-w-sm rounded-lg shadow-2xl" alt='tower' />
    <div className='text-white '>
      <h1 class="lg:text-5xl md:text-3xl sm:text-2xl font-bold">THE SMART PATH FOR BRAND SUCCESS</h1>
      <p class="py-6 lg:text-3xl md:text-2xl sm:text-xl">Digital Market Media is the most trusted provider of inbound calls and leads for insurance, financial services, and other industries.Gain access to a huge portfolio of direct offers and exclusives! Place your offer on our network and reach thousands of publishers!</p>
      <button class="btn btn-primary">SEE MORE</button>
    </div>
  </div>
</div>
  )
}

export default Banner