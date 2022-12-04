import React from 'react'
import Features from '../../components/features/Features'
import Services from '../home/Services'
import EBaner from './EBaner'
import ExBanner from './ExBanner'

const Expertise = () => {
  return (
    <div>
    <EBaner />
    {/* <ExBanner /> */}
      <Features />
      <Services />
    </div>
  )
}

export default Expertise