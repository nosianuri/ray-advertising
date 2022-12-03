import React from 'react';
import blog from '../../assets/Marketing.png';
import reach from '../../assets/subscribe-bg.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Blog = () => {
  return (
    <section style={{
        background: `url(${reach})`
    }} className='flex justify-center items-center'>
<div className='flex-1 hidden lg:block'>
    <img  className='mt-[-200px] w-96'  src={blog} alt="" />
</div>
<div className='flex-1 p-12'>
    <h3 className='text-3xl text-accent pb-5 pt-5'>Reach out Today!</h3>
    <h2 className='text-4xl text-white  pb-5 pt-5'>PUBLISHERS & ADVERTISERS</h2>
    <p className='text-white text-xl pb-5'>Promote high-converting campaigns from leading US advertisers seeking your media-buying, content marketing, social media, and e-mail marketing expertise. Our team of media-buyers and content marketing experts have over 20 years of combined digital marketing expertise. We are here to deliver you highly engaged customers via social, display, native, or email marketing channels.</p>
    <PrimaryButton>Get Started</PrimaryButton>
</div>

    </section>
  )
}

export default Blog