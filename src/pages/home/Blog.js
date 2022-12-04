import React, { useEffect } from 'react';
import blog from '../../assets/Marketing.png';
import reach from '../../assets/subscribe-bg.png';
import "./Blog.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section style={{
        background: `url(${reach})`
    }} className='flex justify-center items-center'>
<div className='flex-1 hidden lg:block' data-aos="fade-up">
    <img  className='mt-[-200px] w-96'  src={blog} alt="" />
</div>
<div className='flex-1 p-12' data-aos="fade-left">
    <h3 className='text-3xl text-accent pb-5 pt-5'>Reach out Today!</h3>
    <h2 className='text-4xl text-white  pb-5 pt-5'>PUBLISHERS & ADVERTISERS</h2>
    <p className='text-white text-xl pb-5'>Promote high-converting campaigns from leading US advertisers seeking your media-buying, content marketing, social media, and e-mail marketing expertise. Our team of media-buyers and content marketing experts have over 20 years of combined digital marketing expertise. We are here to deliver you highly engaged customers via social, display, native, or email marketing channels.</p>
    <button class="btn btn-primary lg:px-32 font-medium text-white border-2 border-blue py-4 group relative flex items-center overflow-hidden">
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
        <span className='relative'><a className='rel' href="/expertise">SEE MORE</a> </span>
      </button>
</div>

    </section>
  )
}

export default Blog