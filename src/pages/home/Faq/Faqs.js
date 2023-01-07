import React, { useEffect, useRef } from 'react';
import img from '../../../assets/short.jpg';
import Faq from '../../../components/faq/Faq';
import './Faq.css';
import AOS from 'aos';


const Faqs = () => {
    const form = useRef();
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div>
            <div className='lg:relative w-full h-full lg:pb-[500px] pb-8'>
                <img className='' src={img} alt="" />
                <div className='lg:absolute lg:top-[200px] lg:w-full lg:h-full lg:left-0'>
                <div className='lg:w-full lg:h-full'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:mx-28 lg:gap-10 justify-center '>
                        
                        <div className="lg:pt-[170px]">
                        <Faq />
                        </div>
                        <div className='mx-2'>                            
                                <div class="box" ref={form}>
                                    <div class="form">
                                        <h2 className='text-3xl bg-[#45f3ff] !text-[#003144]'>Sign in</h2>
                                        <div class="inputBox">
                                            <input type="text"
                                            id='name' name="name" required />
                                            <span>Your Name*</span>
                                            <i></i>
                                        </div>
                                        <div class="inputBox">
                                            <input type="email"
                                            id='email' name="email" required />
                                            <span>Your Email*</span>
                                            <i></i>
                                        </div>
                                        <div class="inputBox">
                                            <input type="number"
                                            id='number' name='number' required />
                                            <span>Your Number*</span>
                                            <i></i>
                                        </div>
                                        <div class="inputBox">
                                            <input type="text" id='message' name="message"  required />
                                            <span>Enter your message</span>
                                            <i></i>
                                        </div>
                                        {/* <div class="links">
                                    <a href="#">Forget Password</a>
                                    <a href="#">Signup</a>
                                </div> */}
                                        <input type="submit" value="SUBMIT MESSAGE" />
                                    </div>
                                </div>
                          
                        </div>
                    </div>
</div>
                </div>

            </div>


        </div>
    )
}

export default Faqs;