import React from 'react'

function About() {
  return (
    <section name='about' className='w-full h-screen  bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full p-4'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold italic inline border-b-4 border-pink-600'>About</p>
            </div>
            
            <div>
            
            </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right py-10 text-4xl font-bold text-center'>
              <p>Hi. I'm Sebi, nice to meet you! Please take a look around.</p>
            </div>
            <div>
              <p className='text-xl text-center'>I am passionate about crafting beautiful websites and web apps that serve people around us. I enjoy delivering valuable products that make  an impact and fulfill the necesities of the world. The satisfaction I get when I see progress in my develomnent skills and in fulfilling the task at hand is invaluable to me. Let's collaborate!</p>  
            </div>
          </div>

      </div>
    </section>
  )
}

export default About
