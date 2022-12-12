import React from 'react'

const ProvideService = () => {
  return (
    <div>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:px-12 md:px-8 lg:pt-16 md:pt-10'>
        <div className='lg:border-r-2 md:border-r-2 py-5'>
            <p className='text-primary mb-4'>WHAT WE CAN DO</p>
            <div className='flex'>
            {/* <i class="fa-solid fa-circle text-8xl text-[#FFD124]  -right-[5px]  relative"></i> */}
            <h2 className='text-3xl font-semibold text-primary'>Our Agency <span className='text-[#4FA1F6]'>Service Provided</span> For Your Business</h2>
            </div>
        </div>
        <div className='lg:border-r-2 md:border-r-2 py-5'>
        <i class="fa-solid fa-network-wired text-[#4FA1F6] text-4xl mb-5"></i>
            <p className='text-2xl font-semibold text-primary'>Affiliate Network</p>
            <h2 className='text-lg text-primary'>Our Agency Affiliate network works with publishers and merchant programs. </h2>
        </div>
        <div className='py-5'>
        <i class="fa-solid fa-cable-car text-[#4FA1F6] text-4xl mb-5"></i>
            <p className='text-2xl font-semibold text-primary'>Pay Per Call</p>
            <h2 className='text-lg text-primary'>Ray provides consistency in quality and volume for advertisers across more than two dozen pay per call.</h2>
        </div>
    </div>
    
    </div> 
  )
}

export default ProvideService