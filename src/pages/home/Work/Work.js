import React from 'react'

const Work = () => {
    return (
        <div className='my-28'>
            <div className='text-center'>
                <p className='text-xs text-secondary mb-5'>HOW THIS WORK</p>
                <div className='flex justify-center'>
                <i class="fa-solid fa-circle text-7xl text-[#FFD124] -right-[115px] -top-[20px] relative"></i>
                <h5 className='text-4xl font-semibold -left-[25px] relative'>Great <span className='text-secondary'>Working Plan</span> With Us</h5>
                </div>
               
                <p className='lg:w-[450px] mx-auto '>Ray Advertising LLC can be a valuable partner to your business, though you may not fully realize all we can do for you. As a sales or marketing manager, our job is to bring in customers through your business's “front doors".</p>
            </div>
            <div>
                <div className='my-10 '>
                    {/* <div  class="divider"></div> */}
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 px-12'>
                        <div className='border-r-2 p-5 bg-primary banner-image'>
                            <p class=" text-[#FFD124] text-4xl mb-5">01</p>
                            <p className='text-2xl font-semibold text-white'>Meeting & Planning</p>
                            <h2 className='text-md text-white'>Our Agency Affiliate network works with publishers and merchant programs.</h2>
                        </div>

                        <div className='border-r-2 p-5 bg-base-200 banner-image'>

                            <p class=" text-secondary text-4xl mb-5">02</p>
                            <p className='text-2xl font-semibold'>Content Strategy</p>
                            <h2 className='text-md '>The key to a successful affiliate marketing campaign is to build relationships with people and companies.</h2>
                        </div>
                        <div className='p-5 bg-base-200 banner-image'>

                            <p class=" text-secondary text-4xl mb-5">03</p>
                            <p className='text-2xl font-semibold '>Create Content</p>
                            <h2 className='text-md '>We provide our clients with state-of-the-art analytics and digital solutions.</h2>
                        </div>
                        <div className='p-5 bg-base-200 banner-image'>

                            <p class=" text-secondary text-4xl mb-5">04</p>
                            <p className='text-2xl font-semibold '>Released Ads</p>
                            <h2 className='text-md '>Individuals improve personal competence and skills for business development and gain competitive advantage.</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Work