import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

function Contact() {
  return (
     <section name='contact' className='flex lg:hidden flex-col justify-center items-center w-full h-screen bg-[#0a192f]'>

            <h2 className='text-xl text-white italic mb-4 '>Get in Contact!</h2>
            <ul >
                <li className='w-[160px] h-[60px] flex justify-between items-center my-4 bg-blue-600'> 
                    <a  className='flex justify-between items-center w-full  text-gray-300 text-xl' href='https://www.linkedin.com/in/sebastian-cirdeiu-6014491b7/' target="_blank" rel="noopener noreferrer">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center my-4 bg-[#333333]'> 
                    <a  className='flex justify-between items-center w-full  text-gray-300 text-xl' href='https://github.com/sebicirdeiu' target="_blank" rel="noopener noreferrer">
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center my-4 bg-[#6c25be]'> 
                    <a  className='flex justify-between items-center w-full  text-gray-300 text-xl' href='mailto:sebbcirdeiu@yahoo.com'>
                        E-mail <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center my-4 bg-[#565f79]'> 
                    <a  className='flex justify-between items-center w-full  text-gray-300 text-xl' href='personal-website/src/assets/CV/Sebi_Cirdeiu.pdf' download>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>

        </section>
  )
}

export default Contact
