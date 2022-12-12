import React from 'react'

const TopHeader = () => {
  return (
    <div className='lg:flex md:flex justify-between m-4 lg:px-16 md:px-10'>
    <div>Follow Us: <span className='text-lg '>
    <a href="https://www.facebook.com/rayadvertisingllc/"><i class="fa-brands fa-facebook pl-3 text-secondary"></i></a>
    
    <a href="https://www.linkedin.com/company/rayadvertising"><i class="fa-brands fa-linkedin  text-secondary"></i></a>
    
    <i class="fa-brands fa-twitter text-secondary"></i>
    </span></div>
    <div className='lg:flex md:flex gap-5'>
        <div><i class="fa-solid fa-location-dot pr-2 text-secondary"></i> Redding, California, USA</div>
        <div className=''><i class="fa-solid fa-square-phone pr-2 text-secondary"></i>(435) 625-1961</div>
    </div>
    </div>
  )
}

export default TopHeader