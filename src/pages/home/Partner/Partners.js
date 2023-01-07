import React from 'react';
import logo1 from "../../../assets/logo16.png";
import logo2 from "../../../assets/logo17.png";
import logo3 from "../../../assets/Untitled-design-4.png";
import logo4 from "../../../assets/logo20-300x134.png";
import logo5 from "../../../assets/logo21.png";
import logo6 from "../../../assets//logo22.png";
import logo7 from "../../../assets/logo23.png";
import logo8 from "../../../assets/logo24.png";


const Partners = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2  lg:px-12 md:px-10 mb-10'>
      <div className='lg:border-r-2 md:border-r-2 py-5'>
        <h1 className='text-3xl text-center mb-5 uppercase py-5'><span className='text-semibold'>Advertising</span> Partner </h1>
        <div className=" grid grid-cols-2 lg:grid-cols-3 lg:ml-32 lg:mr-28 ml-10 overflow-hidden">
          
            <img className=" transform transition-all  w-[120px]" src={logo1} alt="" />
            <img className=" transform transition-all  w-[120px]" src={logo2} alt="" />
            <img className=" transform transition-all  w-[120px]" src={logo3} alt="" />
            <img className=" transform transition-all  w-[120px]" src={logo3} alt="" />
            <img className=" transform transition-all  w-[120px]" src={logo4} alt="" />
            <img className=" transform transition-all  w-[120px]" src={logo5} alt="" />
            <img className=" transform transition-all  w-[120px]" src={logo6} alt="" />
            <img className=" transform transition-all  w-[120px]" src={logo7} alt="" />
            <img className=" transform transition-all  w-[120px]" src={logo8} alt="" />
          

        </div>
      </div>
      <div className=' py-5'>
        <h1 className='text-3xl text-center mb-5 uppercase py-5'><span className='text-semibold'>traffic</span> Partner </h1>
        <div className=" grid grid-cols-2 lg:grid-cols-3 lg:ml-32 lg:mr-28 ml-10 overflow-hidden">
          
            <img className=" transform transition-all  w-[120px]" src={logo1} alt="" />
            <img className=" transform transition-all  w-[120px]" src={logo2} alt="" />
            <img className=" transform transition-all  w-[120px]" src={logo3} alt="" />
            <img className=" transform transition-all  w-[120px]" src={logo3} alt="" />
            <img className=" transform transition-all  w-[120px]" src={logo4} alt="" />
            <img className=" transform transition-all  w-[120px]" src={logo5} alt="" />
            <img className=" transform transition-all  w-[120px]" src={logo6} alt="" />
            <img className=" transform transition-all  w-[120px]" src={logo7} alt="" />
            <img className=" transform transition-all  w-[120px]" src={logo8} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Partners