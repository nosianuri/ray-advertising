import React, { useState } from 'react';
import about from "../../assets/imgpsh_fullsize_anim2.jpg";
import upimg from "../../assets/imgpsh_fullsize (2).png";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../shared/variants';
import AnimatedLetters from '../../shared/AnimatedLetters/AnimatedLetters';

const Abanner = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000);

  return (

    <div class="hero  !bg-no-repeat !bg-cover" style={{
      background: `url(${about})`
    }}>
      <div class="hero-overlay bg-black bg-opacity-25"></div>
      <div class="hero-content  text-white">
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial='hidden'
          whileInView={'show'}

        >
          <div class="max-w-md lg:pt-26 pt-28">
            <motion.h1
              variants={fadeIn('down', 'tween', 0.3, 1.1)}
              initial='hidden'
          whileInView={'show'}
              className='h1 lg:mb-5'
            >
              <h1 class="mb-5 lg:text-7xl md:text-3xl text-2xl font-bold text-center">
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['A', 'B', 'O', 'U', 'T', ' ', ' ', 'U', 'S', ]}
                  idx={15}
                />
              </h1>
            </motion.h1>
            {/* <p class="py-6 lg:text-2xl md:text-2xl sm:text-xl">Everything you need to know about our values and achievements</p> */}

          </div>
        </motion.div>
      </div>
      <div className='lg:mt-36 pt-36 '>
        <img className='lg:mt-36 pt-28' src={upimg} alt="" />
      </div>
    </div>

  )
}

export default Abanner;