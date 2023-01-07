import React from 'react'
import Tabs from './Tabs'
import tabbg from '../../../assets/bgapp.png';

const UpperFooter = () => {
  return (
    <div style={{
      background: `url(${tabbg})`
  }} className='!bg-cover  pt-10'>

    <div className='text-center py-5 '>
      <h1 className='text-3xl uppercase'>Ready to grow your business?</h1>
      <p>Contact us to work with a result-driven digital marketing agency</p>
    </div>
    <div className='pb-16'>
      <Tabs />
    </div>
    {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-12 py-10'> */}
        {/* <div>
            <p className='text-sm text-primary'>NEED MORE BUSINESS</p>
            <div className='flex'>
           
            <h2 className='text-4xl font-semibold text-primary leading-normal'>Lets Get In Touch <span className='italic text-[#4FA1F6]'>With Our Team</span> Professionals</h2>
            </div>
           
        </div> */}
        {/* <div className='pt-8 text-primary'>
            <p>We're a fiercely independent agency that believes creative collaborations are great for business. You should call us to find out how we can help yours.</p>
            <div className='flex gap-5'>
            <button class="btn btn-secondary rounded-full lg:px-5 border-2 border-[#2d9760]  flex items-center  mt-5">
             
              <span className='relative font-bold text-primary'><a className='rel' href="/about">Our services</a></span>
            </button>
            <a href="tel:+14356251961">
              <button className='btn rounded-full text-secondary border-0 hover:bg-base-200 bg-base-200 mt-5'><i class="fa-solid fa-phone pr-3"></i>(435) 625-1961</button>
            </a>
          </div>
        </div> */}
    {/* </div> */}
    </div>
  )
}

export default UpperFooter