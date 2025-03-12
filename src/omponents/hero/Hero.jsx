import React from 'react'
import { FaLinkedinIn , FaBehance , FaGithub } from "react-icons/fa";
import hero from '../../assets/heroImage.png'
import cv from '../../assets/MoamenFullStack.pdf'

const Hero = () => {
  return (
    <section className='pt-10'>
      <div className='mx-auto w-[300px] text-center'>
        <p className='text-gray-500 text-xl md:text-2xl ' style={{fontFamily:"var(--heading-font"}}>hello, i'm</p>
        <h1 className='text-white text-xl md:text-2xl xl:2xl my-2' style={{fontFamily:"var(--main-font"}}>Moamen Abdallah</h1>
        <h3 className='text-xl md:text-[20px] text-gray-500' style={{fontFamily:"var(--heading-font"}}>Full stack developer</h3>
      </div>
      <div className="btns flex justify-center items-center w-500px mx-auto my-6 gap-12">
        <a href={cv} download={true} className='text-white border-r-2 border-t-2 border-gray-300 py-3 text-[16px] md:text-[18px] px-4 block shadow-2xl '>Download CV</a>
        <a href="https://wa.me/+201090742066" target='_blank' className='bg-white text-black  border-none rounded-sm py-3 px-4 text-[16px] md:text-[18px] border-gray-300 p-2 block'>Let's talk</a>
      </div>
      <div className='px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 flex justify-between items-center mt-12'>
        <div className='flex flex-col gap-4  items-center text-[#5985A9] text-xl md:text-[20px]'>
            <a target='_blank' href="https://www.linkedin.com/in/moamen-abdallah-58980225b"><FaLinkedinIn/></a>
            <a target='_blank' href="https://github.com/Moamen-Abdallah"><FaGithub/></a>
            <a target='_blank' href="https://www.behance.net/moamenabdallah2"><FaBehance/></a>
            <span className='w-[1.5px] rounded-full h-[80px] bg-[#5985A9] '></span>
        </div>
        <div className='h-[300px] w-[200px] sm:h-[300px] sm:w-[250px]  md:h-[400px] md:w-[260px] lg:md:w-[300px]  rounded-t-full bg-[#5985A9] overflow-hidden'>
            <img src={hero} alt="hero image" style={{objectFit:"cover" ,width:"100%" , height:"100%"}} />
        </div>
        <div className='text-[#5985A9] text-xl md:text-[19px] ' style={{writingMode:"vertical-lr" ,fontFamily:"var(--heading-font"}}>
            Scroll Down
        </div>
      </div>
    </section>
  )
}

export default Hero
