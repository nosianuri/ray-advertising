import React from 'react';
import tower from "../../assets/towers.png";
import './Banner.css';

const Banner = () => {
  return (
    <div class="hero min-h-screen banner">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={tower} class="max-w-sm rounded-lg shadow-2xl" />
    <div className='text-white'>
      <h1 class="text-5xl font-bold">THE SMART PATH FOR BRAND SUCCESS</h1>
      <p class="py-6">Digital Market Media is the most trusted provider of inbound calls and leads for insurance, financial services, and other industries.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Banner