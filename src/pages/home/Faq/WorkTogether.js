import React from 'react';
import worktogether from '../../../assets/imgpsh_full.png';

const WorkTogether = () => {
  return (
    <div className=''>
      <div style={{ background: `url(${worktogether})` }} className='hero !bg-no-repeat !bg-cover'>
        <div class="hero-overlay bg-opacity-25"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md py-10">
            <h1 class="mb-5 lg:text-6xl md:text-3xl sm:text-2xl font-bold py-16">About us</h1>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkTogether