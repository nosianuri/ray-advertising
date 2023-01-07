import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Servicebody.css';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../shared/variants';

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
        <h1 className='lg:text-3xl mt-4 font-[900] text-[#12232E]'>INBOUND PHONE CALLS THAT BRING INTERESTED CUSTOMERS DIRECTLY TO YOU</h1>
        <p className='mt-5 !text-[#12232E] lg:text-[16px] leading-normal text-sm mb-8'>Pay-per-call is a type of a marketing plan where an advertiser pays a publisher, also known as an affiliate, for getting calls from potential customers. This system may appear to be somewhat energy-consuming, because it involves both online and offline elements, however, with the proper pay-per-call networks, it becomes easier to make the best out of this stream of value.</p>
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
        <h1 className='lg:text-3xl mt-4 font-[900] text-[#12232E]'>DISCOVER HOW EASY IT IS TO FIND NEW CUSTOMERS THROUGH OUR PROPRIETARY WEBSITES.</h1>
        <p className='mt-5 !text-[#12232E] lg:text-[16px] leading-normal text-sm mb-8'>A lead is any individual who demonstrates intrigued in a company’s item or benefit in a few way, shape, or form. Leads ordinarily listen from a commerce or organization after opening communication by submitting individual data for an offer, trial, or membership ,rather than getting a arbitrary cold call from somebody who obtained their contact data.</p>
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