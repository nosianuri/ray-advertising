import React from 'react'

const primaryButton = ({children}) => {
  return (
     <div class="card-actions">
      <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary lg:px-32 ">{children}</button>
    </div> 
  )
}

export default primaryButton