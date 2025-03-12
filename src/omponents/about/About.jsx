import React from 'react'
const About = () => {
    return (
        <section className='px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 mt-24'>
            <div className='mx-auto text-center'>

            <p className='text-gray-500 text-[15px] -mb-2 ' style={{fontFamily:"var(--heading-font"}}>Get To Know</p>
            <h1 className='text-[#54aef7] text-2xl md:text-3xl 2xl:text-4xl my-2' style={{fontFamily:"var(--main-font"}}>About Me</h1>
            </div>
            <div>
            <h1 className='text-center text-[#fff] text-[18px] md:text-[21px]  border-t-2 border-r-2 border-gray-50 w-fit mx-auto px-4 py-3 mt-24 shadow-2xl'>Education</h1>

                <div className='text-[16px] md:text-xl leading-9  text-white text-center mb-32 mt-4' >
                    <span>College : </span>
                    <span className='text-wrap '>Faculty of Commerce <br /> Al-Azhar University</span>
                </div>
                <h1 className='text-center text-[#fff] text-[18px] md:text-[21px] mt-6 border-t-2 border-r-2 border-gray-50 w-fit mx-auto px-4 py-3 shadow-2xl'>Languages</h1>
                <div className='text-[16px] md:text-xl   text-white text-center   mt-4'>
                    <span>Arabic : </span>
                    <span>Native Language </span>
                </div>
                <div className='text-[16px] md:text-xl  text-white text-center mb-32  mt-4'>
                    <span>English : </span>
                    <span>Intermediate</span>
                </div>

                <h1 className='text-center text-[#fff] text-[18px] md:text-[21px] mt-6 border-t-2 border-r-2 border-gray-50 w-fit mx-auto px-4 py-3 shadow-2xl'>The Age</h1>
                <div className='text-[16px] md:text-xl   text-white text-center  mt-4'>
                    <span>Age : </span>
                    <span>24 Years  </span>
                </div>
            
            </div>
        </section>
    )
}

export default About
