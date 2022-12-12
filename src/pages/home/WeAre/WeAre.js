import React from 'react';
import we1 from '../../../assets/successful-businesswoman.jpg';
import we2 from '../../../assets/close-up-of-laptop-with-graphs-k.jpg';
import './WeAre.css';

const WeAre = () => {
    return (
        <div className='m-10 pt-28'>

            <div className='hero-content flex-col lg:flex-row w-full'>
                <div className='flex gap-5'>
                    <div className='mt-[-100px] relative'>
                        <img className='weare-img w-100' src={we1} alt="" />
                    </div>
                    <div>
                   
                    <div className='relative -left-[75px]'>
                        <img className='weare-img w-100 relative' src={we2} alt="" />
                    </div>
                    </div>
                    
                </div>

                <div className='pb-20'>
                    <h5 className='text-primary text-sm mb-3'>WHO WE ARE</h5>
                    <div className='flex'>
                    {/* <i class="fa-solid fa-circle text-8xl text-[#FFD124]  relative"></i> */}
                    <h2 className='lg:text-4xl md:text-2xl font-semibold mb-5 text-primary '>Professionals <span className='text-[#4FA1F6]'>Branding Team</span> and advertising solution agency perfectly for your business</h2>
                    </div>
                    
                    <p className='mb-5 text-primary'>Promote high-converting campaigns from leading US advertisers seeking your media-buying, content marketing, social media, and e-mail marketing expertise.</p>
                    <p className='text-lg border-l-4 border-[#4FA1F6] pl-8 mb-5 font-semibold text-primary'> Our team of media-buyers and content marketing experts have over 20 years of combined digital marketing expertise. We are here to deliver you highly engaged customers via social, display, native, or email marketing channels.</p>
                    <div className='mb-5'>
                        <h3 className='text-2xl font-semibold text-primary'><i class="fa-solid fa-stopwatch text-[#4FA1F6] pr-5"></i>SEARCH ARBITRAGE</h3>
                        <p className='pl-10 text-primary'>We are one of the top search arbitrage players.</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold text-primary'><i class="fa-solid fa-store text-[#4FA1F6] pr-5"></i>Branding Bost Upscale
                        </h3>
                        <p className='pl-10 text-primary'>Utilizing the following traffic sources: Social, Native, and Display.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WeAre