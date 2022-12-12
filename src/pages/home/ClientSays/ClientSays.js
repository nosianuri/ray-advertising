import React from 'react';
import img1 from '../../../assets/successful-businesswoman.jpg';
import img2 from '../../../assets/close-up-of-laptop-with-graphs.jpg';
import ClientReview from './ClientReview';

const ClientSays = () => {
    return (
        <div>
            <div>
                <div className='my-32 '>
                    {/* <div  class="divider"></div> */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-12'>
                    <div className='lg:flex md:flex'>
                    <div className=' p-5  rounded-lg'>
                            <img className='banner-image' src={img1} alt="" />
                        </div>
                        <div className=''>
                            <img className='mb-10 banner-image' src={img2} alt="" />
                            <div className='py-8 lg:px-10 md:px-7 px-3 bg-[#eeeeee] banner-image text-center '>
                                <h3 className='lg:text-lg md:text-md font-semibold text-primary'>Was give the best feedback for our services</h3>
                                <p className='text-primary'>Ray Advertising LLC can be a valuable partner to your business.</p>
                            </div>
                        </div>
                    </div>
                        

                        <div className='pl-5'>
                            <p className='text-sm text-primary mb-5'>TESTIMONIALS CLIENT</p>
                            <div className='flex'>
                            {/* <i class="fa-solid fa-circle text-8xl text-[#FFD124] -top-[-5px] relative"></i> */}
                            <p className='text-4xl text-primary mb-5 font-semibold '> We have <span className='text-[#4FA1F6] italic'> more than 1K +</span> Corporation until individuals client & give they best feedback for us
                            </p>
                            </div>
                            
                            <div>
                            <ClientReview />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientSays