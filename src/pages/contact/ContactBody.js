import React, { useRef } from 'react'
import Faq from '../../components/faq/Faq';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../shared/variants';

const ContactBody = () => {
    const form = useRef();
  return (
    <div>
         <div className='mx-auto relative '>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:ml-32 lg:mr-28  overflow-hidden gap-10 pt-10 '>
                    <div className='pt-10 '>
                    <motion.div
                            variants={fadeIn('right', 'tween', 0.2, 1.8)}
                            initial='hidden'
                            whileInView={'show'}
                        >
                    <Faq />
                   </motion.div>
                    </div>
                    <div className=' mb-16 mx-5'>
                    
                        <div class="box" >
                            <div class="form" ref={form}>
                                <h2 className='text-3xl  text-center bg-[#45f3ff] !text-[#003144]'>Sign in</h2>
                                <div class="inputBox">
                                    <input type="text" name="name" required />
                                    <span>Your Name*</span>
                                    <i></i>
                                </div>
                                <div class="inputBox">
                                    <input type="email" name="email" required />
                                    <span>Your Email*</span>
                                    <i></i>
                                </div>
                                <div class="inputBox">
                                    <input type="number" name='number' required />
                                    <span>Your Number*</span>
                                    <i></i>
                                </div>
                                <div class="inputBox">
                                    <input type="text" name="message" required />
                                    <span>Enter your message</span>
                                    <i></i>
                                </div>
                                {/* <div class="links">
                                    <a href="#">Forget Password</a>
                                    <a href="#">Signup</a>
                                </div> */}
                                <input  type="submit" value="SUBMIT MESSAGE" />
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
    </div>
  )
}

export default ContactBody