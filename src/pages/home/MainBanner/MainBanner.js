import React from 'react';
import './MainBanner.css';
import buyer from '../../../assets/design-thinking-collaboration.webp';



const MainBanner = () => {
  return (
    <div style={{
      background: `url(${buyer})`
    }} className=' !bg-cover !bg-no-repeat'>
      <div class="bg-black  bg-opacity-25">

        <div class="w-full py-[100px]">
          <div class="mx-auto max-w-[1240px] text-white pl-5">
            <h1 class="lg:text-4xl md:text-xl text-lg font-bold">THE SMART PATH FOR BRAND SUCCESS</h1>
            <p class="py-6 lg:text-3xl md:text-2xl text-lg">We work on
              {/* <Typed
                className='pl-3'
                strings={['Media Buying', 'Advertisement', 'Publisher', 'Marketing']}
                typeSpeed={100}
                loop={true}
                backSpeed={120}
              /> */}
            </p>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBanner