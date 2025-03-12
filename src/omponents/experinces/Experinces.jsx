import React from 'react'
import html from '../../assets/html-5.png'
import css from '../../assets/text.png'
import js from '../../assets/js-file.png'
import bootstrap from '../../assets/bootstrap.png'
import talwind from '../../assets/talwind.png'
import sass from '../../assets/sass.png'
import github from '../../assets/social.png'
import node from '../../assets/nodejs.png'
import git from '../../assets/git.png'
import mongooDB from '../../assets/database.png'
import express from '../../assets/express.png'

function Experinces() {
  return (
    <section className='px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 mt-24 mb-24'>
            <div className='mx-auto text-center'>

            <p className='text-gray-500 text-[16px] capitalize -mb-2 ' style={{fontFamily:"var(--heading-font"}}>what skills i have</p>
            <h1 className='text-[#54aef7] text-2xl md:text-3xl 2xl:text-4xl my-2 capitalize ' style={{fontFamily:"var(--main-font"}}>my Experience</h1>
            </div>



                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mx-auto mt-20  max-w-[1065px] " style={{width:"fit-content"}}>
                    <div className=' w-[350px] md:w-[260px] h-[120px] px-3 flex justify-between items-center cursor-pointer  rounded-lg bg-[#29294a] hover:scale-[1.04] transition'>
                        <h2 className='text-[#54aef7]'>HTML5</h2>
                        <img src={html} height={50} width={50} alt="" />
                    </div>
                    <div className='w-[350px] md:w-[260px] h-[120px] px-3 flex justify-between items-center cursor-pointer  rounded-lg bg-[#29294a] hover:scale-[1.04] transition'>
                        <h2 className='text-[#54aef7] uppercase'>css3</h2>
                        <img src={css} height={50} width={50} alt="" />
                    </div>
                    <div className='w-[350px] md:w-[260px] h-[120px] px-3 flex justify-between items-center cursor-pointer  rounded-lg bg-[#29294a] hover:scale-[1.04] transition'>
                        <h2 className='text-[#54aef7] uppercase'>java script</h2>
                        <img src={js} height={50} width={50} alt="" />
                    </div>
                    <div className='w-[350px] md:w-[260px] h-[120px] px-3 flex justify-between items-center cursor-pointer  rounded-lg bg-[#29294a] hover:scale-[1.04] transition'>
                        <h2 className='text-[#54aef7] uppercase'>bootstrap5</h2>
                        <img src={bootstrap} height={50} width={50} alt="" />
                    </div>
                    <div className='w-[350px] md:w-[260px] h-[120px] px-3 flex justify-between items-center cursor-pointer  rounded-lg bg-[#29294a] hover:scale-[1.04] transition'>
                        <h2 className='text-[#54aef7] uppercase'>talwind</h2>
                        <img src={talwind} height={50} width={50} alt="" />
                    </div>
                    <div className='w-[350px] md:w-[260px]  h-[120px] px-3 flex justify-between items-center cursor-pointer  rounded-lg bg-[#29294a] hover:scale-[1.04] transition'>
                        <h2 className='text-[#54aef7] uppercase'>sass</h2>
                        <img src={sass} height={50} width={50} alt="" />
                    </div>
                    
                    <div className='w-[350px] md:w-[260px] h-[120px] px-3 flex justify-between items-center cursor-pointer  rounded-lg bg-[#29294a] hover:scale-[1.04] transition'>
                        <h2 className='text-[#54aef7] uppercase'>git</h2>
                        <img src={git} height={50} width={50} alt="" />
                    </div>
                    <div className='w-[350px] md:w-[260px] h-[120px] px-3 flex justify-between items-center cursor-pointer  rounded-lg bg-[#29294a] hover:scale-[1.04] transition'>
                        <h2 className='text-[#54aef7] uppercase'>github</h2>
                        <img src={github} height={50} width={50} alt="" />
                    </div>
                    <div className='w-[350px] md:w-[260px] h-[120px] px-3 flex justify-between items-center  cursor-pointer rounded-lg bg-[#29294a] hover:scale-[1.04] transition'>
                        <h2 className='text-[#54aef7] uppercase'>node</h2>
                        <img src={node} height={50} width={50} alt="" />
                    </div>
                    <div className='w-[350px] md:w-[260px] h-[120px] px-3 flex justify-between items-center  cursor-pointer rounded-lg bg-[#29294a] hover:scale-[1.04] transition'>
                        <h2 className='text-[#54aef7] uppercase'>express</h2>
                        <img src={express} height={50} width={50} alt="" />
                    </div>
                    <div className='w-[350px] md:w-[260px] h-[120px] px-3 flex justify-between items-center  cursor-pointer rounded-lg bg-[#29294a] hover:scale-[1.04] transition'>
                        <h2 className='text-[#54aef7] uppercase'>mongooDB</h2>
                        <img src={mongooDB} height={50} width={50} alt="" />
                    </div>
                </div>
               
        </section>
  )
}

export default Experinces
