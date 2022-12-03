import React from 'react';

const InfoCard = ({img, cardtitle, bgClass, descrip}) => {
  return (
    <div>
      <div class={`card lg:card-side bg-base-100 shadow-xl  ${bgClass}`}>
  <figure className='pl-5'><img src={img} alt="Album"/></figure>
  <div class="card-body text-white">
    <h2 class="card-title">{cardtitle}</h2>
    <p>{descrip}</p>
    {/* <div class="card-actions justify-end">
      <button class="btn btn-primary">Listen</button>
    </div> */}
  </div>
</div>
    </div>
  )
}

export default InfoCard