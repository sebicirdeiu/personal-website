import React from 'react'
import JavaScript from '../assets/javascript.png'
import Html from '../assets/html.png'
import CSS from '../assets/css.png'
import ReactJS from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Github from '../assets/github.png'


const Skills = () => {
  return (
    <section name='skills' className='bg-[#0a192f] flex justify-center items-center h-screen'>
        {/* Container */}
        <div className='max-w-[1000px]  text-gray-300 p-4 flex flex-col justify-center items-center w-full h-full' >
            <div>
                <p className='text-4xl font-bold inline italic border-b-4 border-pink-600'>Skills</p>
                <p className='py-4 text-xl'>This is the tech stack that I've worked with:</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Html} alt="Html icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactJS} alt="React icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                    <p className='my-4'>Tailwind CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="Github icon" />
                    <p className='my-4'>Github</p>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Skills