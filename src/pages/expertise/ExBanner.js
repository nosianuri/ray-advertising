import React from 'react';
import contactbackground from "../../assets/about-us.jpg";

const ExBanner = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
    {/* <div className='flex insert-0 bg-gray-100 items-center justify-center'>
      <div className='flex items-stretch'>
        <div className='bg-white p-8 w-64 shadow-lg rounded-lg overflow-hidden mr-8 z-0'>
          <h2 className='text-2xl font-semibold'>dsjagfhaskdgfhas</h2>
          <span className='text-gray-600 font-semibold mt-4'>fjansdjkfkahgjadshfgdkfjghskjdfhg</span>
            <p className='mt-4 text-gray-700'>djshgjkasrhdtgtgtgtgtgtgtgtgdsrnjktfgedfhdnasfkgkdfhdfsngjn</p>
          
        </div>
        <div style={{
        background: `url(${contactbackground})`
    }} className='w-96 bg-cover center shadow-lg rounded-lg my-5'></div>
      </div>
    </div> */}
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />
    
    <div>
      <h1 class="text-5xl font-bold pr-32">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default ExBanner