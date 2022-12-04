import React from 'react';
import story from "../../assets/Radian.jpg";

const Story = () => {
  return (
    <div style={{
        background: `url(${story})` 
    }} class="hero min-h-screen bg-white">
  <div class="hero-content flex-col lg:flex-row-reverse">
    {/* <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" /> */}
    <div className=' w-1/2'>
      <h1 class="text-5xl font-bold">OUR STORY</h1>
      <p className='pt-6'>Ray Advertising started out in 2019 when a small team of ambitious marketers decided to combine their efforts and make a difference in the online advertising industry.</p>
      <p class="pt-6">Ray Advertising LLC is a rapidly growing, industry-leading, one-of-a-kind digital marketing, and data solutions performance marketing agency generating leads, calls, and sales, for its global client base. </p>
      <p className='pt-6'>We offer best-in-class consumer acquisition & data platforms focused on the insurance services markets with deep expertise in insurance, home services, legal and financial. Our vision is simply to drive a new era of development, growth, and productivity. And our desire to be the best in the market sparks us to reach our ultimate destiny.</p> 
      <p className='pt-6'>Ray Advertising LLC can be a valuable partner to your business, though you may not fully realize all we can do for you. As a sales or marketing manager, our job is to bring in customers through your business's “front doors" Performance Marketing is Easy with Ray Advertising. Reach out Today for a Free Consultation.</p> 
      {/* <button class="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
  )
}

export default Story