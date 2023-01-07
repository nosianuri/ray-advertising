import React, { useEffect } from 'react';
import AOS from 'aos';

const GroupTitle = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div style={{ background: `url(https://i.ibb.co/HzbgDnX/reach-us.png)` }} className='  text-center mb-2 !bg-cover bg-no-repeat'>
      <div className='lg:py-12'>
        
          <h1 className='text-white lg:text-7xl lg:pt-0 pt-2' >REACH US TODAY!</h1>
        
       
          <p className='text-white lg:text-xl text-sm lg:mt-3 text-center pb-3 ' >Let’s See How We Can Work Together.</p>
       
      </div>

    </div>
  )
}

export default GroupTitle