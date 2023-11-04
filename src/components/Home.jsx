import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll'

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600 text-2xl italic font-medium'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Sebastian Cîrdeiu.</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front End Developer.</h2>
            <p className='text-[#A9a9b7] text-2xl font-medium py-4 max-w-[700px]'>I enjoy creating interesting, interactive and useful web applications with the use of React, JavaScript, CSS and, lately, Tailwind CSS. </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-800 hover:border-pink-800'>
                  <Link to='projects' smooth={true} duration={500} >View Projects</Link> 
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3'/>
                </span></button>
            </div>
        </div>
      
    </div>
  )
}

export default Home
