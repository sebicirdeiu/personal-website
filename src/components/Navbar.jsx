import React, {useState} from 'react'
import logo from '../assets/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'


const Navbar = () => {
   const [nav, setNav] = useState(false)
   const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={logo} alt="Logo" style={{width: '70px'}} />
        </div>
        {/* menu */}

            <ul className='hidden md:flex text-xl'>
                <li>
                    <Link to='home' smooth={true} duration={500} >Home</Link>
                </li>
                <li>
                     <Link to='about' smooth={true} duration={500} >About</Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500} >Skills</Link>
                </li>
                <li>
                   <Link to='projects' smooth={true} duration={500} >Projects</Link>
                </li>
            </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-4xl'}>
            <li className='py-6'><Link onClick={handleClick} to='home' smooth={true} duration={500} >Home</Link></li>
            <li className='py-6'> <Link onClick={handleClick} to='about' smooth={true} duration={500} >About</Link></li>
            <li className='py-6'> <Link onClick={handleClick} to='skills' smooth={true} duration={500} >Skills</Link></li>
            <li className='py-6'> <Link onClick={handleClick} to='projects' smooth={true} duration={500} >Projects</Link></li>
            <li className='py-6'><Link onClick={handleClick} to='contact' smooth={true} duration={500} >Contact</Link></li>
        </ul>

       
    </div>
  )
}

export default Navbar