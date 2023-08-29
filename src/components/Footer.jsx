import React from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaRegNewspaper } from 'react-icons/fa';

const Footer = () => {
  return (
    <div name="footer" className='w-full text-white drop-shadow-md p-5 grid grid-cols-2 place-items-center bg-slate-900 mx-auto gap-2 footer'>
        <div className='my-2 text-lg font-bold'>
           Copyright © 2023. All rights reserved.
        </div>
        <div className='gap-4 flex'>
           <a className='hover:scale-125 transition duration-500' href='https://www.facebook.com/yanzxcasdqwe' target='_blank'><FaFacebook size={40}/></a>
            <a className='hover:scale-125 transition duration-500' href='https://www.linkedin.com/in/arris-ian-peralta-95a29b232' target='_blank'><FaLinkedin size={40}/></a>
            <a className='hover:scale-125 transition duration-500' href="https://github.com/yanzpdev" target='_blank'><FaGithub size={40}/></a>
        </div>
        
    </div>
  )
}

export default Footer