import React from 'react'
import whatsapp from '../../assets/whatsapp.png'
import telephone from '../../assets/telephone.png'

const Global = () => {
  return (
    <div className='fixed  bottom-8 left-4 flex flex-col gap-6 '> 
      <a href="https://wa.me/+201090742066" target='_blank'>
      <img src={whatsapp} width={10} height={10} className='circlee relative ' />
      </a>
      <a  href="tel:01090742066" target='_blank'>
      <img src={telephone} width={10} height={10} className='circlee relative ' />
      </a>
    </div>
  )
}

export default Global
