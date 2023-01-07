import React from 'react'

const ProvideService = () => {
  return (
    <div>
    <div className='grid grid-cols-1 lg:grid-cols-3  lg:px-12 md:px-8 lg:pt-16 md:pt-10'>
        <div className='lg:border-r-2 md:border-r-2 py-5 px-5'>
            <p className='text-primary mb-4'>WHAT WE CAN DO</p>
            <div className='flex'>
            {/* <i class="fa-solid fa-circle text-8xl text-[#FFD124]  -right-[5px]  relative"></i> */}
            <h2 className='text-4xl font-semibold '>Our Agency <span className=''>Service Provided</span> For Your Business</h2>
            </div>
        </div>
        <div className='lg:border-r-2 md:border-r-2 py-5 px-5 hover:bg-[#8655f0] hover:text-white transition duration-300 ease-out hover:ease-in'>
        <i class="fa-solid fa-network-wired text-[#FF4B1B] text-4xl mb-5"></i>
            <p className='text-2xl font-semibold '>Affiliate Network</p>
            <h2 className='text-lg '>Our Agency Affiliate network works with publishers and merchant programs. </h2>
        </div>
        <div className='py-5 hover:bg-[#8655f0] hover:text-white px-5 transition duration-300 ease-out hover:ease-in'>
        <i class="fa-solid fa-cable-car text-[#FF4B1B] text-4xl mb-5"></i>
            <p className='text-2xl font-semibold '>Pay Per Call</p>
            <h2 className='text-lg '>Ray provides consistency in quality and volume for advertisers across more than two dozen pay per call.</h2>
        </div>
    </div>
    
    </div> 
  )
}

export default ProvideService