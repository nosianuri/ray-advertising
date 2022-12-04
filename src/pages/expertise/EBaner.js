import React from 'react';
import contactbackground from "../../assets/main-interna.jpg";

const EBaner = () => {
  return (
    <div  style={{
        background: `url(${contactbackground})`
    }} class="hero h-screen !bg-no-repeat bg-cover">
  <div class="hero-content text-center bg-secondary lg:mt-[350px] lg:mx-32">
    <div class=" text-white lg:px-32">
      <h1 class="lg:text-5xl md:text-3xl sm:text-2xl font-bold">OUR PEOPLE</h1>
      <p class="py-6">
Beneath the digital layers and conversions, we’re built on human connections. We invite you to get acquainted with us digitally – and then we’d like to get to know you in person.</p>
     
    </div>
  </div>
</div>
  )
}

export default EBaner