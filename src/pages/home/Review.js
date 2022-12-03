import React from 'react'

const Review = ({review}) => {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
  <div class="card-body">
    {/* <h2 class="card-title">Card title!</h2> */}
    <p>{review.review}</p>
    <div class="flex items-center">
    <div class="avatar">
  <div class="w-24 rounded-full mr-5">
    <img src={review.img} alt="" />
  </div>
</div>
<div>
    <h4 className='text-xl'>{review.name}</h4>
</div>
    </div>
  </div>
</div>
  )
}

export default Review