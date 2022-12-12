import React from 'react';
import './MainBanner.css';
import { Facts } from '../../../shared/Facts/Facts';
import buyer from '../../../assets/design-thinking-collaboration.webp';
import Typed from 'react-typed';
import { BsMouse } from "react-icons/bs";

const MainBanner = () => {
  return (
    <div style={{
      background: `url(${buyer})`
    }} className=' !bg-cover !bg-no-repeat'>
      <div class="bg-black  bg-opacity-25">

        <div class="w-full py-[100px]">
          <div class="mx-auto max-w-[1240px] text-white pl-5">
            <h1 class="text-4xl font-bold">THE SMART PATH FOR BRAND SUCCESS</h1>
            <p class="py-6 text-3xl">We are
              <Typed
                className='pl-3'
                strings={['Media Buying', 'Advertising', 'Publiser']}
                typeSpeed={100}
                loop={true}
                backSpeed={120}
              />
            </p>
            <div className="floating-icon">
                        <a href="#services">
                            <BsMouse color="#fff" size={25} className="mouse" />
                        </a>
                    </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBanner