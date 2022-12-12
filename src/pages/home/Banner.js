import React, { useEffect } from 'react';
import bannerimg from '../../assets/photo-editors.jpg';
import bannerphoto from "../../assets/photographer.jpg";
import './Banner.css';
import media from '../../assets/media-buying-background-00.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { Facts } from '../../shared/Facts/Facts';

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div class="hero banner my-5 ">
      <div class="hero-content flex-col lg:flex-row-reverse ">

      <div className=' lg:pr-14 md:pr-10 '>
       
      <div className=''>
      <i class="fa-regular fa-square text-4xl text-secondary rotate-[25deg] -right-[90px] -top-[20px] relative"></i>
      <i class="fa-solid fa-plus relative text-4xl text-[#FFD124] -left-[20px] -top-[-20px]" ></i>
        <div className='flex justify-between gap-10 lg:mr-20 relative'>
          <div>
          <img width={230} height={100} src={bannerimg} class="max-w-sm rounded-lg !rotate-[25deg] banner-image" alt='tower' data-aos="fade-up" />
          </div>
          <img width={230} height={100} src={bannerphoto} class="max-w-sm rounded-lg !rotate-[25deg] banner-image" alt='tower' data-aos="fade-up" />
        </div>
        <i class="fa-regular fa-circle relative text-5xl text-secondary -right-[290px]"></i>
        </div>
        </div>

        <div className=' lg:pr-32 lg:ml-10 md:ml-8'>
          <h5 className='text-secondary '>BRANDING AGENCY SERVICES</h5>
          <div><i class="fa-solid fa-circle text-8xl text-[#FFD124]  -right-[5px] -top-[-30px] relative"></i>
            <h1 class="lg:text-4xl md:text-3xl sm:text-2xl font-semibold !leading-normal relative mt-[-65px]">We Are <span className='text-secondary !font-semibold'>Branding Solution</span> And Advertising Agency</h1>
          </div>
          

          <p class=" lg:text-xl md:text-xl sm:text-xl mt-3">Ray Creative brings together teams of experts from around the world to match a specific company or project, Marketing & Advertisement. Digital Market Media is the most trusted provider of inbound calls and leads for insurance, financial services, and other industries.</p>
          <div className='flex gap-5'>
            <button class="btn btn-secondary rounded-full lg:px-5 hover:text-white  text-white border-2 border-blue  group relative flex items-center overflow-hidden mt-5">
              {/* <span className='absolute left-0 w-full h-0 transition-all bg-blue opacity-100 group-hover:h-full group-hover:top-0 duration-400 ease'></span>
              <span className='absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease'>
                <svg className="w-5 h-5" fill="none" stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    stroke-strokeLinejoin='round'
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span> */}
              <span className='relative font-bold'><a className='rel' href="/about">Our services</a></span>
            </button>
            <a href="tel:+14356251961">
              <button className='btn rounded-full text-secondary border-0 hover:bg-white bg-white mt-5'><i class="fa-solid fa-phone pr-3"></i>(435) 625-1961</button>
            </a>
          </div>
          <Facts />
        </div>
       
      </div>
      </div>
  
   )
}

export default Banner