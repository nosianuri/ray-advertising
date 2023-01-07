import React from 'react';
import rayfooter from '../../../assets/Newsletter_img.png';
import artboard from '../../../assets/Artboard.png';

const BelowCard = () => {
    return (
        <div className='bg-base-200'>

            <div>
                <div className='pl-20 '>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10  '>
                        <div className=' pt-5  banner-image'>
                            <img className='pt-8' width={100} src={artboard} alt="" />

                            <p className='mt-3'>Ray Advertising LLC<br />Providing reliable tech since 2019</p>
                        </div>
                        <div>
                            <img className='pt-16 w-1/2' src={rayfooter} alt="" />
                        </div>

                        <div className=' pt-5  banner-image'>
                            <div className='pt-10'>
                                <a href="https://www.facebook.com/rayadvertisingllc/"><i class="fa-brands fa-facebook pl-3 text-[#FF4B1B] text-3xl"></i></a>
                                <a href="/"><i class="fa-brands fa-twitter pl-3 text-[#FF4B1B] text-3xl"></i></a>

                                <a href="https://www.linkedin.com/company/rayadvertising"><i class="fa-brands fa-linkedin pl-3 text-[#FF4B1B] text-3xl"></i></a>

                            </div>

                            <p className=' text-3xl mt-2'>Call: <a className='text-gray-700 hover:text-[#FF4B1B]' href="tel:+14356251961">(435) 625-1961</a></p>
                            <p className='mt-2 '><span className='hover:text-[#FF4B1B]'>Contact Us<i class="fa-solid fa-chevron-up rotate-90 "></i></span> <span className='pl-3 hover:text-[#FF4B1B]'>Thrive Gives Back<i class="fa-solid fa-chevron-up rotate-90"></i></span></p>

                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default BelowCard