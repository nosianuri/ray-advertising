import React from 'react';
import contactbackground from "../../assets/main-interna.jpg";

const EBaner = () => {
  return (
    <div  style={{
        background: `url(${contactbackground})`
    }} class="hero h-screen !bg-no-repeat bg-cover">
  <div class="hero-content text-center bg-secondary mt-[350px] mx-32">
    <div class=" text-white px-32">
      <h1 class="text-5xl font-bold">OUR PEOPLE</h1>
      <p class="py-6">
Beneath the digital layers and conversions, we’re built on human connections. We invite you to get acquainted with us digitally – and then we’d like to get to know you in person.</p>
     
    </div>
  </div>
</div>
  )
}

export default EBaner