import React from 'react';
import homeBanner from '../../../assets/close-up-of-laptop-with-graphs.jpg';
import './Testimonial.css';

const Testimonial = () => {
    return (
        <div className='testimonial'>
            <div style={{
                background: `url(${homeBanner})`
            }} className=' !bg-cover  !bg-no-repeat'>
                <div className='bg-black bg-opacity-25 '>
                
                    <div className='lg:d-flex justify-content-center '>
                    
                        <div className='article-lead  '>
                        <div className='bg-black bg-opacity-25 '>
                            <div className='px-10 py-16'>
                                <p className='text-xs text-[#FFD124]'>WHY CHOICE US</p>
                                <h1 className='lg:text-4xl send-us pt-5 !leading-normal font-bold mb-5 text-white'>
                                    We solved and <span className='text-[#FFD124]'>Give Solution</span> Not only agency service, We more better than agency services </h1>
                                <h2 className=' fill-text mb-5'>Performance Marketing is Easy with Ray Advertising. Reach out Today for a Free Consultation.</h2>
                                <div className='fill-call'>
                                    <a href="\#topform"><button className='lg:text-xl rounded-full fill-btn bg-[#00AFC1] hover:bg-primary mb-10 font-bold text-white p-3'>GET A QUOTATION</button></a> 
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-50 bg-primary'>
                <div className=' bg-primary p-5  my-10'>
                    <h5 className='mb-4 lg:text-xl md:text-lg text-sm'>Ray Advertising craves growth and expansion. Our tailor-made campaigns and spot-on strategy help our clients launch brands.</h5>
                    <div className='mb-5'>
                        <h2 className='lg:text-2xl md:text-xl'><i class="fa-solid fa-superscript text-[#FFD124] lg:text-4xl md:text-xl text-md pr-3"></i>Be an Better Solution</h2>
                        <p className='text-sm pl-10'>Growing your business online doesn’t have to be complicated.</p>
                    </div>
                    <div className='mb-5'>
                   
                        <h2 className='lg:text-2xl md:text-xl'><i class="fa-brands fa-battle-net text-[#FFD124] lg:text-4xl md:text-2xl pr-3"></i>Trusted By Many Corporate</h2>
                        <p className='text-sm pl-10'>Ray Advertising craves growth and expansion.</p>
                    </div>
                    <div>
                    
                        <h2 className='lg:text-2xl md:text-xl'><i class="fa-solid fa-ruler-combined text-[#FFD124] lg:text-4xl md:text-2xl  pr-3"></i>Accurate & Great Target</h2>
                        <p  className='text-sm pl-10'>Business development and gain competitive advantage.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial