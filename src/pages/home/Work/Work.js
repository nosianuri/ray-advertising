import React from 'react'

const Work = () => {
    return (
        <div className='my-28'>
            <div className='text-center'>
                <p className='text-xs text-primary mb-5'>HOW THIS WORK</p>
                <div className='flex justify-center'>
                {/* <i class="fa-solid fa-circle text-7xl text-[#FFD124] -right-[115px] -top-[20px] relative"></i> */}
                <h5 className='text-4xl font-semibold text-primary'>Great <span className='text-[#4FA1F6]'>Working Plan</span> With Us</h5>
                </div>
               
                <p className='lg:w-[450px] mx-auto text-primary'>Ray Advertising LLC can be a valuable partner to your business, though you may not fully realize all we can do for you. As a sales or marketing manager, our job is to bring in customers through your business's “front doors".</p>
            </div>
            <div>
                <div className='my-10 '>
                    {/* <div  class="divider"></div> */}
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 px-12'>
                        <div className='border-r-2 p-5 bg-primary banner-image'>
                            <p class=" text-[#F78061] text-4xl mb-5">01</p>
                            <p className='text-2xl font-semibold text-white'>Meeting & Planning</p>
                            <h2 className='text-md text-white'>Our Agency Affiliate network works with publishers and merchant programs.</h2>
                        </div>

                        <div className='border-r-2 p-5 bg-base-200 banner-image'>

                            <p class=" text-[#4FA1F6] text-4xl mb-5">02</p>
                            <p className='text-2xl font-semibold text-primary'>Content Strategy</p>
                            <h2 className='text-md text-primary'>The key to a successful affiliate marketing campaign is to build relationships with people and companies.</h2>
                        </div>
                        <div className='p-5 bg-base-200 banner-image'>

                            <p class=" text-[#4FA1F6] text-4xl mb-5">03</p>
                            <p className='text-2xl font-semibold text-primary'>Create Content</p>
                            <h2 className='text-md text-primary'>We provide our clients with state-of-the-art analytics and digital solutions.</h2>
                        </div>
                        <div className='p-5 bg-base-200 banner-image'>

                            <p class=" text-[#4FA1F6] text-4xl mb-5">04</p>
                            <p className='text-2xl font-semibold text-primary'>Released Ads</p>
                            <h2 className='text-md text-primary'>Individuals improve personal competence and skills for business development and gain competitive advantage.</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Work