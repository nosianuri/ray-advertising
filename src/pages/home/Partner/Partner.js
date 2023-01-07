import React from 'react';
import logo1 from "../../../assets/logo6-300x134-1.png";
import logo2 from "../../../assets/Contact.io-Logo-no-messaging.png";
import logo3 from "../../../assets/logo15-300x134-1.png";
import logo4 from "../../../assets/download (2).png";
import logo5 from "../../../assets/download-2.png";
import logo6 from "../../../assets/images-300x89-1.png";

const Partner = () => {
    return (
        <div className='section mt-28 border-y-2 border-gray-200'>
            <div className='py-10'>
                <div className='section-title-group  mx-auto px-4 lg:px-10 text-center'>
                    
                    <div className='flex justify-center'>

                        <h2 className='text-4xl mt-3 mb-3 font-semibold  '>Official <span className=''>Corporate</span> Partner</h2>
                    </div>

                    <p className='mx-auto max-w-[550px]  mb-10 text-sm'>Our modern approach to marketing techniques, adoption of advanced technology and beyond all our strive for excellence make us the first choice</p>
                </div>
                <div className='mx-10'>
                    <div className="partner-logo lg:mx-20 mx-5">
                        <div className='lg:pl-8 '>
                        <div className="lg:flex mx-auto justify-center gap-5 w-[120px] ">
                            <img className=" transform transition-all " src={logo1} alt="" />
                            <img className="image-icon transform transition-all " src={logo2} alt="" />
                            <img className="image-icon transform transition-all " src={logo3} alt="" />
                            <img className="image-icon transform transition-all " src={logo4} alt="" />
                            <img className="image-icon transform transition-all " src={logo5} alt="" />
                            <img className="image-icon transform transition-all " src={logo6} alt="" />
                            
                        </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Partner