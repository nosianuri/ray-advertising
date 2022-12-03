import React from 'react';
import quote from '../../assets/quote.png';
import target1 from '../../assets/low-prices.png';
import target2 from '../../assets/improve.png';
import target3 from '../../assets/statistics.png';
import Review from './Review';

const Testimonial = () => {
    const reviews =[
        {
            _id: 1,
            name: 'Reduce Operating Costs',
            review: 'When you’re losing 10 cents on the dollar, getting leads quickly becomes a race to the bottom. With Ray, you only pay for the calls you receive.',
            img: target1
        },
        {
            _id: 2,
            name: 'Reduce Operating Costs',
            review: 'Say goodbye to low response rates. Through hyperlocal targeting + custom ad campaigns, we send you high-intent calls from qualified leads.',
            img: target2
        },
        {
            _id: 3,
            name: 'Reduce Operating Costs',
            review: 'Our performance-based marketers live and die by cost-per-acquisition (CPA). We make it easy to see the data in real time in order to monitor + improve performance',
            img: target3
        },
    ]
  return (
    <section className='my-28 px-12'>
        <div className='flex justify-between'>
            <div>
                <h4 className='text-3xl text-primary font-bold'>Data- Driven marketing Platform</h4>
                <h2 className='text-4xl'>Here’s What You’ll Get</h2>
            </div>
            <div>
                <img src={quote} className= "w-24 lg:w-48 "alt="" />
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                reviews.map(review=> <Review key={review._id} review={review}></Review>)
            }
        </div>
    </section>
  )
}

export default Testimonial