import React from 'react'
import { Download, Faq } from '../../components'
import Features from '../../components/features/Features'
import Abanner from './Abanner'

const about = () => {
  return (
    <div>
      <Abanner />
      
      <Download />
      <Faq />
    </div>
  )
}

export default about