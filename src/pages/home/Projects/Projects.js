import React, { useEffect } from 'react';
import AOS from 'aos';
import './projects.css';
import img2 from '../../../assets/imgpsh_fullsize (2).png';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../shared/variants';

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
                            <p className='mt-3'>Ray Advertising offers products and services that are only available to a select group of affiliates, rather than being available to all members of the network. These offers have higher payouts or better terms than non-exclusive offers, and they are in high demand due to their exclusivity. Exclusive inventory is beneficial for affiliates, allowing top-performing affiliates to earn more money.</p>
                        </div>

                    </div>
                
                    <div className='bg-[#003144] p-10 text-white' data-aos="flip-right">
                        <div>
                            <h2 className='text-xl font-bold'>FIRST-PARTY DATA ADVANTAGE</h2>
                            <p className='mt-3'>Affiliates can gain access to first-party data about their customers when they run exclusive offers through Ray Advertising’s affiliate network. This data can include information such as demographics, purchasing history, browsing behavior, etc. Our Affiliates can optimize campaigns, improve targeting, and increase the effectiveness of offers based on the valuable insights of First-Party Data.</p>
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
                            <p className='mt-3'>Fraud prevention is an important aspect of Ray Advertising, as it can help to protect our network and our affiliates from financial losses and damage to their reputations. To prevent fraud, we implement strict guidelines for affiliate approval and regularly monitor affiliate activity. Also, we use fraud detection software and conduct regular audits to identify any potential fraud and take appropriate action.</p>
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
                            <p className='mt-3'>Ray Advertising provides 24/7 support to ensure that their affiliates have access to assistance whenever they need it. Also, our affiliates may have questions or need assistance with setting up campaigns or optimizing their performance, and our 24/7 support can provide guidance and advice to help them succeed. Ray Advertising focuses on ensuring smooth operation, providing guidance and advice, building trust and loyalty, being available for different time zones, and being responsive to urgent issues.</p>
                        </div>
                    </motion.div>
                </div>

            </div>
            <img src={img2} alt="" />
        </div>
    )
}

export default Projects