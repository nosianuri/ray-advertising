import React from 'react';
import img1 from '../../../assets/photo-editors.jpg';
import img2 from '../../../assets/creative-thinking-webpage.jpg';
import img3 from '../../../assets/close-up-of-laptop-with-graphs.jpg';
import Progress from './Progress';

const Blog = () => {
    return (
        <div>
            <div>
                <div className='my-10 '>
                    {/* <div  class="divider"></div> */}
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
                        <div className=' p-5  rounded-lg'>
                            <img className='banner-image' src={img1} alt="" />
                        </div>

                        <div className='border-r-2 p-5 bg-base-200 banner-image'>

                            <p className='text-lg border-l-4 border-[#4FA1F6] pl-8 mb-5 font-semibold text-primary'> Our team of media-buyers and content marketing experts have over 20 years of combined digital marketing expertise.</p>
                            <p className='text-md text-primary'> We are here to deliver you highly engaged customers via social, display, native, or email marketing channels.</p>
                            {/* <h2 className='text-md '>It is our mission to build a fully-transparent, brand-safe ecosystem that benefits advertisers.</h2> */}
                            <p className='mt-3 text-primary'><i class="fa-solid fa-check text-[#4FA1F6] pr-3"></i>Great many corporation solution</p>
                            <p className='mt-3 text-primary'><i class="fa-solid fa-check text-[#4FA1F6] pr-3"></i>Best branding & advertising agency</p>
                            <p className='mt-3 text-primary'><i class="fa-solid fa-check text-[#4FA1F6] pr-3"></i>Best commited & money back</p>
                            <p className='mt-3 text-primary'><i class="fa-solid fa-check text-[#4FA1F6] pr-3"></i>Solid Team working officier</p>
                            <p className='mt-3 text-primary'><i class="fa-solid fa-check text-[#4FA1F6] pr-3"></i>Great many corporation solution</p>
                            <p className='mt-3 text-primary'><i class="fa-solid fa-check text-[#4FA1F6] pr-3"></i>Best branding & advertising agency</p>
                            <p className='text-sm mt-3 text-[#4FA1F6]'>BOSTER BRANDING </p>
                            <Progress done="88" />
                            <p className='text-sm mt-3 text-[#4FA1F6]'>ADS INSIGHT</p>
                            <Progress done="96" />
                        </div>
                        <div className=''>
                            <img className='mb-10 banner-image' src={img2} alt="" />
                            <img className='banner-image' src={img3} alt="" />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blog