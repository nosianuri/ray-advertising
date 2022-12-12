import React from 'react'
import ProvideService from './ProvideService'
import ProvideServices from './ProvideServices'

const Provide = () => {
  return (
    <div className='mx-10 mb-32'>
        <ProvideService />
        <div  class="divider"></div>
        <ProvideServices />
    </div>
  )
}

export default Provide