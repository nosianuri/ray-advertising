import React, { useState } from 'react';
import imgup from "../../assets/imgpsh_fullsize (2).png";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../shared/variants';
import AnimatedLetters from '../../shared/AnimatedLetters/AnimatedLetters';

const Banner = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)

  return (
    <div class="hero  !bg-no-repeat !bg-cover" style={{
      background: `url(https://i.ibb.co/7n2x63K/networkc.jpg)` 
  }}>
<div class="hero-overlay bg-black bg-opacity-25"></div>
<motion.div
          variants={staggerContainer(0.3, 1)}
          initial='hidden'
          whileInView={'show'}

        >
<div class="hero-content  text-white">
    <div class="max-w-lg lg:pt-30 pt-28">
    <motion.h1
              variants={fadeIn('down', 'tween', 0.3, 1.1)}
              initial='hidden'
          whileInView={'show'}
              className='h1 lg:mb-5'
            >
      <h1 class="mb-5 lg:text-7xl md:text-3xl text-2xl font-bold text-center">
      <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', ' ', ' ', 'U', 'S', ]}
                  idx={15}
                />
      </h1>
      {/* <p class="py-6 lg:text-2xl md:text-2xl sm:text-xl">Everything you need to know about our values and achievements</p> */}
      </motion.h1>
    </div>
  </div>
  </motion.div>
  <div className='lg:mt-32 pt-32'>
  <img className='lg:mt-32 pt-36' src={imgup} alt="" />
  </div>
</div>
  )
}

export default Banner