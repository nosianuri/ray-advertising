import React from 'react'

const UpperFooter = () => {
  return (
    <div className='bg-base-200'>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-12 py-10'>
        <div>
            <p className='text-sm text-primary'>NEED MORE BUSINESS</p>
            <div className='flex'>
            {/* <i class="fa-solid fa-circle text-8xl text-[#FFD124] -top-[-30px] relative"></i> */}
            <h2 className='text-4xl font-semibold text-primary leading-normal'>Lets Get In Touch <span className='italic text-[#4FA1F6]'>With Our Team</span> Professionals</h2>
            </div>
           
        </div>
        <div className='pt-8 text-primary'>
            <p>We're a fiercely independent agency that believes creative collaborations are great for business. You should call us to find out how we can help yours.</p>
            <div className='flex gap-5'>
            <button class="btn btn-secondary rounded-full lg:px-5 border-2 border-[#2d9760]  flex items-center  mt-5">
              {/* <span className='absolute left-0 w-full h-0 transition-all bg-blue opacity-100 group-hover:h-full group-hover:top-0 duration-400 ease'></span>
              <span className='absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease'>
                <svg className="w-5 h-5" fill="none" stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    stroke-strokeLinejoin='round'
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span> */}
              <span className='relative font-bold text-primary'><a className='rel' href="/about">Our services</a></span>
            </button>
            <a href="tel:+14356251961">
              <button className='btn rounded-full text-secondary border-0 hover:bg-base-200 bg-base-200 mt-5'><i class="fa-solid fa-phone pr-3"></i>(435) 625-1961</button>
            </a>
          </div>
        </div>
    </div>
    </div>
  )
}

export default UpperFooter