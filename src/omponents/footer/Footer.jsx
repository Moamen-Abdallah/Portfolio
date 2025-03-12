import React from 'react'
import telephone from '../../assets/telephone-call.png'
import mail from '../../assets/mail.png'

function Footer() {
  return (
    <footer className='bg-[#29294a]  text-white flex justify-center items-center gap-16 py-3 text-xl md:text-[19px]' style={{fontFamily:"var(--main-font)"}}>
      <h4 className='italic flex justify-center gap-3' > 
        <img src={mail} width={30} height={30} alt="" /> momenalhakeem3@gmail.com</h4>
      <h4  className='italic flex justify-center gap-3' ><img src={telephone} width={30} height={30} alt="" /> 01090742066</h4>
    </footer>
  )
}

export default Footer
