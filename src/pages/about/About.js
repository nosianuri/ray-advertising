import React from 'react'
import { Download, Faq } from '../../components'
import Abanner from './Abanner'
import Career from './Career'
import Story from './Story'

const about = () => {
  return (
    <div>
      <Abanner />
      <Story />
      <Download />
      <Faq />
      <Career />
    </div>
  )
}

export default about