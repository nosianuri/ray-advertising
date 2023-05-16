import React from 'react'
import career from "../../assets/builderon.png";
import "animate.css";
import { motion } from 'framer-motion';
import { staggerContainer } from '../../shared/variants';

const Career = () => {
  return (
    <div>
      <div className='lg:mt-16'>
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial='hidden'
          whileInView={'show'}

        >
          <div class=" text-center  py-10 lg:px-32 px-10">
            <div class="lg:px-32 bg-white">
              
                <h1 class="mb-5  lg:text-3xl text-xl font-bold text-[#12232E]">RAPIDLY GROWING #1 PERFORMANCE AFFILIATE NETWORK</h1>
             
              
                <p class=" text-md text-center lg:px-16 text-[#12232E]">Ray Advertising was founded in December 2019 and currently resides in Redding, CA. We call the Big Apple home, but our network of clients extends worldwide. From day one, we are committed to providing performance marketing services that deliver sustainable results. We know when we help our clients succeed, we succeed.</p>
              
            </div>
          </div>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 lg:mx-32 md:mx-28  overflow-hidden gap-10 py-8'>
          <div className='card shadow-2xl p-5 mx-10 bg-white relative' data-aos='zoom-in'
            data-aos-offset='5'
            data-aos-delay='10'>
            <div className='mx-auto'>
              <div className='bg-[#32dbe7] px-6 py-7 rounded-full'>
                <i class="fa-regular fa-handshake text-5xl text-white"></i>
              </div>
            </div>
            <h1 className='text-center text-2xl font-bold mt-3 text-[#12232E]'>OUR MISSION</h1>
            <p className='mt-2 px-5 text-[#12232E]'>In terms of the vision of Ray Advertising, our company dreams to rank in the top tier of the Pay-Per-Call sector while also maximizing our profits and cash flow, both of which will ensure long-term growth initiatives for our affiliate publishers and advertisers.</p>
          </div>
          <div className='card shadow-2xl p-5 mx-10 bg-white relative'
            data-aos='zoom-in'
            data-aos-offset='5'
            data-aos-delay='10'>
            <div className='mx-auto'>
              <div className='bg-[#32dbe7] px-8 py-6 rounded-full'>
                <i class="fa-regular fa-lightbulb text-5xl text-white"></i>
              </div>
            </div>

            <h1 className='text-center text-2xl font-bold mt-3 text-[#12232E]'>OUR VISION</h1>
            <p className='px-5 mt-2 text-[#12232E]'>Our company's mission is to build a reputation as one of the most important hubs for pay-per-call networks in the world, and we want to accomplish this by utilizing our portfolio of strategies to differentiate our offerings in the fields of lead generation and affiliate marketing.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career