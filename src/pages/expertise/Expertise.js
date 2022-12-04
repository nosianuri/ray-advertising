import React from 'react'
import Features from '../../components/features/Features'
import Services from '../home/Services'
import EBaner from './EBaner'
import Publisher from './Publisher'
import TopText from './TopText'

const Expertise = () => {
  return (
    <div>
    <EBaner />
    <TopText />
      <Features />
      {/* <Services /> */}
      <Publisher />
    </div>
  )
}

export default Expertise