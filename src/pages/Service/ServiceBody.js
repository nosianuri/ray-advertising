import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Servicebody.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../../shared/variants';

gsap.registerPlugin(ScrollTrigger);

const ServiceBody = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(el, {autoAlpha: 0}, {
        duration: 1,
         autoAlpha: 1,
          ease: "none",
           scrollTrigger: {
            // id: `section-${index+1}`,
            trigger: el,
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
            // markers: true
           }
    });
    })
  }, []);

  const addToRefs = (el) => {
    if(el && !revealRefs.current.includes(el)){
      revealRefs.current.push(el);
    }
  }
  return (
    <div className='flex justify-center servicebody'>
    <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1.6)}
         
          className='text-center capitalize flex flex-col items-center'
        >
      <div className=' grid overflow-hidden gap-10 py-8 lg:w-2/3'>
      <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1.8)}
            initial='hidden'
          whileInView={'show'}
            className='flex-1 text-center lg:text-left'
          >
      <div className='text-center shadow-lg	bg-base-100 lg:px-5  core-box py-10 px-5' ref={addToRefs}>
      <h3 className='border-2 border-[#032738] lg:mx-5 w-full text-[#032738] font-bold'>PAY PER CALL</h3>
        <h1 className='lg:text-3xl mt-4 font-[900] text-[#12232E] uppercase'>Why Should Advertisers and Publishers Use Pay Per Call Service? </h1>
        <p className='mt-5 !text-[#12232E] lg:text-[16px] leading-normal text-sm mb-8'>Ray Advertising offers Pay Per Call Service which is a strategy of advertising that enables publishers to place ads on a digital ad network and get paid by advertisers only for the calls that those ads bring in, according to a predetermined cost per call and performance metric. This kind of marketing will become more popular in 2023 since it lets companies monitor the results of their efforts and tailor their messages to certain demographics. We provide companies with Pay Per Call solutions, allowing them to create individualized marketing programs. Additionally, using our recommended tracking system, such as Ringba, businesses can also track the performance of their campaigns in real-time, allowing them to make adjustments as needed. We strongly recommend that businesses who wish to target a certain demographic and measure the success of their advertising efforts primarily via phone calls may benefit from this kind of promotion.
</p>
      </div>
      </motion.div>
      
      <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1.8)}
            initial='hidden'
          whileInView={'show'}
            className='flex-1 text-center lg:text-left'
          >
      <div className='text-center shadow-lg bg-base-100 core-box py-10 px-5' ref={addToRefs}>
      <h3 className='border-2 border-[#032738] lg:mx-5 w-full text-[#032738] font-bold'>LEAD GENERATION</h3>
        <h1 className='lg:text-3xl mt-4 font-[900] text-[#12232E] uppercase'>Why Should Advertisers and Publishers Use LEAD GENERATION?</h1>
        <p className='mt-5 !text-[#12232E] lg:text-[16px] leading-normal text-sm mb-8'>Ray Advertising offers Lead generation Service which is a strategy that can assist businesses in generating demand and interest within the target markets and potential customers. In marketing, a lead is defined as a person or business that has connected with a brand in some manner and shows promise as a prospective customer. Creating new leads is a crucial step in every company's sales process. Ray Advertising’s lead generation services facilitate the discovery of new customers, the cultivation of existing ones, and the generation of sales for any business worldwide. Our skillful in-house media buying team and publishers around the globe generate leads that are more likely to become customers by adopting strategies like content marketing, search engine optimization, social media marketing, and email marketing. Leads can be generated in a variety of ways, but one of the most efficient is through digital advertising on social.</p>
      </div>
      </motion.div>

      <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1.8)}
            initial='hidden'
          whileInView={'show'}
            className='flex-1 text-center lg:text-left'
          >
      <div className='text-center shadow-lg bg-base-100 core-box py-10 px-5' ref={addToRefs}>
      <h3 className='border-2 border-[#032738] lg:mx-5 w-full text-[#032738] font-bold'>AFFILIATE NETWORK</h3>
        <h1 className='lg:text-3xl mt-4 font-[900] text-[#12232E]'>CREATING VALUABLE PARTNERSHIPS BETWEEN ADVERTISERS & PUBLISHERS</h1>
        <p className='mt-5 !text-[#12232E] lg:text-[16px] leading-normal text-sm mb-8'>We believe the key to a successful affiliate marketing campaign is building relationships with people and companies you trust. Our experience working across multiple verticals combined with finding high paying and high converting offers is what separates us from our competitors.</p>
      </div>
      </motion.div>
      </div>
      </motion.div>
    </div>
  )
}

export default ServiceBody;