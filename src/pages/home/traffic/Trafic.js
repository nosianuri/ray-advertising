import React from 'react'
import ClientReview from '../ClientSays/ClientReview';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../shared/variants';

const Trafic = () => {
  return (
    <section className=''>
      
        <div className=' section-title-group max-w-[540px] mx-auto px-4 lg:px-10 text-center'>
          <p className='lg:text-4xl md:text-2xl text-xl mt-10 text-[#12232E] font-bold'>TRAFFIC PARTNERS</p>

        </div>
      
      <div className='my-10 lg:mx-32'>
       
          <ClientReview />
       


      </div>
    </section>
  )
}

export default Trafic;