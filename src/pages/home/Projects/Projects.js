import React, { useEffect } from 'react';
import AOS from 'aos';
import './projects.css';
import img2 from '../../../assets/imgpsh_fullsize (2).png';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../shared/variants';

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);
    return (
        <div className='text-center project-bg'>
            
                <h1 className='lg:text-4xl text-xl font-[900] text-[#12232E]'>WHY CHOOSE US FOR PROJECTS!</h1>
           
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:ml-32 lg:mr-28  overflow-hidden gap-10 my-10'>
                
                    <div className='bg-[#003144] p-10 text-white' data-aos="flip-right">
                        <div>
                            <h2 className='text-xl font-bold'>EXCLUSIVE INVENTORY</h2>
                            <p className='mt-3'>More than a network of affiliates, Ray's team includes designers, developers, content writers, and product managers.</p>
                        </div>

                    </div>
                
                    <div className='bg-[#003144] p-10 text-white' data-aos="flip-right">
                        <div>
                            <h2 className='text-xl font-bold'>FIRST-PARTY DATA ADVANTAGE</h2>
                            <p className='mt-3'>Ray leverages CCPA-compliant first-party data from millions of calls, clicks, leads, app installs, and PII to create targeting profiles that accelerate the identification and conversion of your audience into customers.</p>
                        </div>

                    </div>
                

                <div className='bg-[#003144] p-10 text-white' data-aos="fade-down">
                    <motion.div
                        variants={fadeIn('left', 'tween', 0.2, 1.8)}
                        initial='hidden'
                        whileInView={'show'}
                    >
                        <div>
                            <h2 className='text-xl font-bold'>FRAUD PREVENTION</h2>
                            <p className='mt-3'>Over the years, we have formed the most accurate principles and methods of fraud tracking and instant response.</p>
                        </div>
                    </motion.div>
                </div>


                <div className='bg-[#003144] p-10 text-white' data-aos="fade-down">
                    <motion.div
                        variants={fadeIn('left', 'tween', 0.2, 1.8)}
                        initial='hidden'
                        whileInView={'show'}
                    >
                        <div>
                            <h2 className='text-xl font-bold'>24/7 SUPPORT</h2>
                            <p className='mt-3'>We care about our client’s needs. That’s why our experts are available 24/7 to assist you.</p>
                        </div>
                    </motion.div>
                </div>

            </div>
            <img src={img2} alt="" />
        </div>
    )
}

export default Projects