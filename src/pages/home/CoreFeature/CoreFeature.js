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
          className=' flex flex-col lg:items-center text-justify	'
        >
          <div className='lg:px-32 mx-5 lg:mx-10 my-10'>
            <motion.div
              variants={fadeIn('down', 'tween', 0.2, 1.1)}
              className=' text-[18px] lg:text-[28px] font-primary lg:font-medium mb-1'
            >

            </motion.div>
            <motion.h1
              variants={fadeIn('down', 'tween', 0.2, 1.1)}
              className='h1 mb-5 '
            >
              <h1 className='lg:text-4xl text-center text-xl text-[#12232E] font-semibold'>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['O', 'U', 'R', ' ', 'C', 'O', 'R', 'E', ' ', 'A', 'C', 'T', 'I', 'V', 'I', 'T', 'E', 'S']}
                  idx={15}
                />
              </h1>
            </motion.h1>


            <p className='lg:text-md lg:px-10 mt-5 lg:text-center text-[#12232E]'>Ray Advertising stands out because of its ability to assist Advertisers in more than 250+ verticals in reaching their intended audiences with effective digital advertising campaigns through its active Publishers and in-house Media Buying Team when compared to other Pay Per Call, Lead Generation, and Affiliate Network marketing companies. In addition, our Affiliate marketing programs have increased publishers' return on investment (ROI) and return on ad spend (ROAS) across the media buying and planning process, which has led to widespread satisfaction. Hence, we serve a broad variety of sectors, including but not limited to Finance & Banking, Legal, eCommerce, Health Insurance, and Home Services, to ensure our reputation as the best pay-per-call, lead-generation, affiliate network worldwide.
            </p>

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
              <div className='text-center text-[#12232E] bg-white px-8 pt-20 core-box'>
                <h1 className='text-xl font-bold'>PAY PER CALL</h1>
                <p className='py-3'>Ray Advertising offers Pay Per Call Service which is a strategy of advertising that enables publishers to place ads on a digital ad network and get paid by advertisers only for the calls that those ads bring in, according to a predetermined cost per call and performance metric.</p>

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
              <div className='text-center bg-white px-8 pt-20 text-[#12232E] core-box'>
                <h1 className='text-xl font-bold'>LEAD GENERATION</h1>
                <p className='py-3'>Ray Advertising offers Lead generation Service which is a strategy that can assist businesses in generating demand and interest within the target markets and potential customers. In marketing, a lead is defined as a person or business that has connected with a brand in some manner and shows promise as a prospective customer.</p>

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

                <p className='py-3'>Affiliating is a form of online marketing in which an affiliate earns a commission for referring customers to a merchant's website. Similar to Ray Advertising, an affiliate network mediates between advertisers and affiliates so that both can profit from the relationship.</p>

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