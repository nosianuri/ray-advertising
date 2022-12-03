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
      <h1 class="mb-5  text-5xl font-bold">About us</h1>
      <p class="py-6 text-3xl">Everything you need to know about our values and achievements</p>
      
    </div>
  </div>
</div>
//     <div style={{
//         background: `url(${about})` 
//     }} class="hero min-h-screen bg-base-200 abanner">
//   <div class="hero-content text-center">
//     <div class="max-w-md text-white">
//       <h1 class="text-5xl font-bold">About us</h1>
//       <p class="py-6 text-3xl">Everything you need to know about our values and achievements</p>
//       {/* <button class="btn btn-primary">Get Started</button> */}
//     </div>
//   </div>
// </div>
  )
}

export default Abanner