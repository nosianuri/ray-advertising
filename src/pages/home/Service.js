import React from 'react';

const Service = ({service}) => {
  return (
    <div class="card lg:max-w-[250px] hover:bg-base-100 ">
  <figure class="px-10 pt-10">
    <img src={service.img} alt="Shoes" class="rounded-xl transform transition-all hover:skew-x-6" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{service.name}</h2>
    <p className='text-sm'>{service.description}</p>
    <div class="card-actions">
      <button class="btn mt-5 bg-[#efefef] text-gray-800 text-xs rounded-full hover:bg-[#FF4B1B] hover:text-white">Learn More</button>
    </div>
  </div>
</div>
  )
}

export default Service