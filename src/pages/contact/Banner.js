import React from 'react';
import transform from "../../assets/Services.png";

const Banner = () => {
  return (
    <div class="hero min-h-screen bg-white">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={transform} class="max-w-sm rounded-lg shadow-2xl" />
        <div className='lg:pr-16'>
          <h1 class="lg:text-5xl md:text-3xl sm:text-2xl font-bold">Partner with us to change the way you work.</h1>
          <p class="pt-6 lg:text-xl lg:pr-16">At Ray Advertising performance marketing is in our DNA. We’re digital marketing experts that continue to explore creative methods to engage more meaningfully with users.</p>
          <div class="divider w-1/2 secondary"></div>
          <p class=" lg:text-xl lg:pr-16">We are designing a demand pathway optimization solution that ensures results, transparency, and control to partners via a standalone intermediation platform.</p>
        </div>
      </div>
    </div>
  )
}

export default Banner