import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

function Aside() {
  return (
     <aside className='hidden lg:block lg:mr-4 fixed  top-[35%] left-0 text-xl'>
            <ul >
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'> 
                    <a  className='flex justify-between items-center w-full  text-gray-300' href='https://www.linkedin.com/in/sebastian-cirdeiu-6014491b7/' target="_blank" rel="noopener noreferrer">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'> 
                    <a  className='flex justify-between items-center w-full  text-gray-300' href='https://github.com/sebicirdeiu' target="_blank" rel="noopener noreferrer">
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6c25be]'> 
                    <a  className='flex justify-between items-center w-full  text-gray-300' href='mailto:sebbcirdeiu@yahoo.com'>
                        E-mail <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f79]'> 
                    <a  className='flex justify-between items-center w-full  text-gray-300' href='src/assets/CV/Sebi_Cirdeiu.pdf' download>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>

        </aside>
  )
}

export default Aside
