import React, { useState } from 'react';
import Logo from '../assets/logo1.png';
import { Link } from 'react-scroll';
import './sidebar.css';

const Navbar = () => {

  return (
    <div className='fixed w-full h-[5rem] flex justify-between items-center px-4 bg-[white] z-10 drop-shadow-xl'>
        <div>
            <img src={Logo} alt='Logo image' style={{width: '9.375rem'}}></img>
        </div>

        <ul className='hidden md:flex font-bold'>
            <li>
                <Link to="home" smooth={true} duration={500}>
                    <div className='hover:text-red-800 duration-300'>
                    Home
                    </div>
                </Link>
            </li>

            <li>
                <Link to="about" smooth={true} duration={500}>
                    <div className='hover:text-red-800 duration-300'>
                    About
                    </div>
                </Link>
            </li>
            <li>
                <Link to="projects" smooth={true} duration={500}>
                    <div className='hover:text-red-800 duration-300'>
                    Projects
                    </div>
                </Link>
            </li>            
            <li>
                <Link to="contact" smooth={true} duration={500}>
                    <div className='hover:text-red-800 duration-300'>
                    Contact
                    </div>
                </Link>
            </li>
        </ul>
    </div>
  )
}
 
export default Navbar