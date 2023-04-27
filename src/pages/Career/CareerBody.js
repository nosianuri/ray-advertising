import React from 'react'
import Tabs from './Tabs'

const CareerBody = () => {
    return (
        <div className='sm:pt-36 pt-24 pb-16'>
            <div className='max-w-7xl mx-auto'>
                <div className='border w-[180px] text-center border-[#363535] rounded-full px-4 py-1 mt-5 sm:mx-0 mx-2'>
                    <h4 className='text-[17px] font-bold'>We're hiring!</h4>
                </div>
                <h2 className='sm:text-[45px] text-[30px] mt-5 px-1 font-bold text-[#003144]'>Be Part of our mission</h2>
                <h6 className='sm:w-[550px] px-2'>We're looking for passionate people to join us on our mission, We value flat hierarchies, clear communication and full ownership and responsibility.</h6>
                <div className='mt-10'>
                    <Tabs />
                </div>
                <h2 className='text-center text-[20px] font-bold mt-10'>Untitled truly values work-life balance. We work hard and deliver, but at the end of the day you can switch off.</h2>
               
            </div>
        </div>
    )
}

export default CareerBody