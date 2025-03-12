import React from 'react'
import telephone from '../../assets/telephone-call.png'
import mail from '../../assets/mail.png'

function Footer() {
  return (
    <footer className='bg-[#29294a] flex-col gap-2 pl-24 sm:pl-0 items-start sm:flex-row text-white flex justify-center sm:items-center sm:gap-16 py-3 text-xl md:text-[19px]' style={{fontFamily:"var(--main-font)"}}>
      <h4 className='italic flex justify-center gap-3' > 
        <img src={mail} width={30} height={30} alt="" /> momenalhakeem3@gmail.com</h4>
      <h4  className='italic flex justify-center gap-3' ><img src={telephone} width={30} height={30} alt="" /> 01090742066</h4>
    </footer>
  )
}

export default Footer
