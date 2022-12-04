import React from 'react';
import mexpert from "../../assets/triple-bottom-line.png"

const MExpert = () => {
  return (

<div class="hero min-h-screen bg-white">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={mexpert} class=" rounded-lg " />
    <div className='lg:pr-32 md:pr-16'>
      <h1 class="lg:text-5xl lg:md text-2xl">Digital Performance Advertising </h1>
      <p class="py-6 lg:text-xl md-text-xl text-sm">Ray Advertising LLC is a rapidly growing, industry-leading, one-of-a-kind digital marketing, and data solutions performance marketing agency generating leads, calls, and sales, for its global client base. We offer best-in-class consumer acquisition & data platforms focused on the insurance services markets with deep expertise in insurance, home services, legal and financial. </p>
      <button class="btn btn-primary lg:px-32 text-xl font-large text-white border-2 border-blue  group relative flex items-center overflow-hidden lg:mt-5">
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
        <span className='relative'><a className='rel' href="/about">SEE MORE</a></span>
      </button>
    </div>
  </div>
</div>
    
  )
}

export default MExpert