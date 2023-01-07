import React, { useState } from 'react';
import media from '../../../assets/ntw.jpg';


const white = { background: 'white' }
const blue = { background: 'blue' }

const MultiSide = () => {
  const [color, setColor] = useState(white);
  return (

    <div style={{
      background: `url(${media})`
    }} className=' !bg-cover !bg-no-repeat '>
      <div className='py-32 pl-32'>
        <h1 className='text-3xl hover:pl-10 text-white mt-5'>Affiliate Network<i class="fa-solid fa-arrow-right pl-3"></i></h1>
        <h2 className='text-3xl text-white mt-5 hover:pl-10'>Pay Per Call<i class="fa-solid fa-arrow-right pl-3"></i></h2>
        <h3 className='text-3xl text-white mt-5 hover:pl-10'>Lead Genaration<i class="fa-solid fa-arrow-right pl-3"></i></h3>
        <h4 className='text-3xl text-white mt-5 hover:pl-10'>Media Buting<i class="fa-solid fa-arrow-right pl-3"></i></h4>
      </div>

    </div>


  )
}

export default MultiSide