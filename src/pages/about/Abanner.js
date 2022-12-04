import React from 'react';
import about from "../../assets/main-interna.jpg";

const Abanner = () => {
  return (

    <div class="hero h-screen !bg-no-repeat bg-cover" style={{
                background: `url(${about})` 
            }}>
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 lg:text-6xl md:text-3xl sm:text-2xl font-bold">About us</h1>
      <p class="py-6 lg:text-2xl md:text-2xl sm:text-xl">Everything you need to know about our values and achievements</p>
    </div>
  </div>
</div>

  )
}

export default Abanner;