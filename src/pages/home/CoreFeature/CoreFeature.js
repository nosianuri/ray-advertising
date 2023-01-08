import React, { useEffect, useState } from 'react'
import img1 from '../../../assets/icon2-1.gif';
import img2 from '../../../assets/icon2-2.gif';
import img3 from '../../../assets/icon2-4.gif';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../shared/variants';
import AnimatedLetters from '../../../shared/AnimatedLetters/AnimatedLetters';
import "animate.css";
import './CoreFeatures.css';


const CoreFeature = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)

  return (
    <div className='grid-bg bg-base-100 anim'>
      <div className='inner'>
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial='hidden'
          whileInView={'show'}
          className='text-center flex flex-col items-center'
        >
          <div className='text-center lg:px-32 m-10'>
            <motion.div
              variants={fadeIn('down', 'tween', 0.2, 1.1)}
              className=' text-[18px] lg:text-[28px] font-primary lg:font-medium mb-1'
            >

            </motion.div>
            <motion.h1
              variants={fadeIn('down', 'tween', 0.2, 1.1)}
              className='h1 mb-5 '
            >
              <h1 className='lg:text-4xl text-xl text-[#12232E]'>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['O', 'U', 'R', ' ', 'C', 'O', 'R', 'E', ' ', 'F', 'E', 'A', 'T', 'U', 'R', 'E', 'S']}
                  idx={15}
                />
              </h1>
            </motion.h1>

            
              <p className='lg:text-md lg:px-32 mt-5 text-center text-[#12232E]'>Our core specialties are Pay Per Call, affiliate marketing, and lead generation. Pay Per Call which consistently named us the #1, ensures the best consistency in volume and quality for advertisers across more than 250+ verticals</p>
           
          </div>
        </motion.div>

       
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:ml-32 lg:mr-28  overflow-hidden gap-10 py-8'>
          <div
            className='relative '
            data-aos='zoom-in'
            data-aos-offset='2'
            data-aos-delay='5'
          >
            <div>
              <div>
                <img className='mx-auto mb-[-50px]' src={img1} alt="" />
              </div>
              <div className='text-center text-[#12232E] bg-white px-10 pt-20 core-box'>
                <h1 className='text-xl font-bold'>PAY PER CALL</h1>
                <p className='py-3'>Pay-per-call is a type of performance marketing where an advertiser pays publishers (also known as affiliates or distribution partners) for quality calls generated on the advertiser’s behalf.</p>

              </div>
              <div className='core-box  bg-white text-center py-2'>
                <a href='/service'><span className='text-[#087d86]'>Learn More</span><i class="fa-solid fa-arrow-right text-[#087d86] ml-3"></i> </a>
              </div>
            </div>
          </div>

          <div
            className='relative '
            data-aos='zoom-in'
            data-aos-offset='2'
            data-aos-delay='5'
          >
            <div>
              <div>
                <img className='mx-auto mb-[-50px]' src={img2} alt="" />
              </div>
              <div className='text-center bg-white px-10 pt-20 text-[#12232E] core-box'>
                <h1 className='text-xl font-bold'>LEAD GENERATION</h1>
                <p className='py-3'>Lead generation is the initiation of consumer interest or enquiry into products or services of a business. A lead is the contact information. In some cases, demographic information of a customer who is interested in a specific product or service.</p>

              </div>
              <div className=' core-box bg-white text-center py-2'>
                <a href='/service' className='text-[#087d86]'>Learn More<i class="fa-solid fa-arrow-right text-[#087d86] ml-3"></i></a>
              </div>
            </div>
          </div>

          <div
            className='relative '
            data-aos='zoom-in'
            data-aos-offset='2'
            data-aos-delay='5'
          >
            <div>

              <div>
                <img className='mx-auto mb-[-50px]' src={img3} alt="" />
              </div>
              <div className='text-center bg-white px-10 pt-20 text-[#12232E] core-box'>
                <h1 className='text-xl font-bold'>AFFILIATE NETWORK</h1>

                <p className='py-3'>Affiliate marketing is a marketing arrangement in which affiliates receive a commission for each visit, signup or sale they generate for a merchant. This arrangement allows businesses to outsource part of the sales process.</p>

              </div>
              <div className='core-box bg-white text-center py-2'>
                <a href='/service' className='text-[#087d86]'>Learn More<i class="fa-solid fa-arrow-right text-[#087d86] ml-3"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoreFeature;