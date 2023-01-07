import React from 'react';
import imgurl from '../../assets/photographer.jpg';

const ProvideServices = () => {
  return (
    <div> 
    {/* <div  class="divider"></div> */}
    <div className='grid grid-cols-1 lg:grid-cols-3  lg:px-12 md:px-10'>
        <div className='lg:border-r-2 md:border-r-2 py-5 px-5 hover:bg-[#8655f0] hover:text-white transition duration-300 ease-out hover:ease-in '>
        
        <i class="fa-solid fa-chart-simple text-[#FF4B1B] hover:text-white text-4xl mb-5"></i>
            <p className='text-2xl font-semibold '>Marketing System</p>
            <h2 className='text-lg '>Ray Marketing will assist you with all your promotional needs, including wearables screen printed or embroidered, awards, employee incentives.</h2>
        
        {/* <img src={imgurl} alt="" /> */}
        </div>
        
        <div className='lg:border-r-2 md:border-r-2 py-5 px-5 hover:bg-[#8655f0] hover:text-white transition duration-300 ease-out hover:ease-in'>
       
        <i class="fa-solid fa-file-shield text-[#FF4B1B] text-4xl mb-5"></i>
            <p className='text-2xl font-semibold '>Brand Safety</p>
            <h2 className='text-lg '>It is our mission to build a fully-transparent, brand-safe ecosystem that benefits advertisers.</h2>
        </div>
        <div className='py-5 px-5 hover:bg-[#8655f0] hover:text-white transition duration-300 ease-out hover:ease-in'>
       
        <i class="fa-brands fa-trade-federation text-[#FF4B1B] text-4xl mb-5"></i>
            <p className='text-2xl font-semibold '>Lead Generation</p>
            <h2 className='text-lg '>Acquire leads generated through dedicated vertical landing pages, content-site embeds. Leads are sold on an exclusive or shared basis.</h2>
        </div>
    </div>
    
    </div>
  )
}

export default ProvideServices