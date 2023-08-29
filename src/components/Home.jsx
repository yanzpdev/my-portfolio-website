import React from 'react';
import { motion } from "framer-motion"
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaBootstrap
} from 'react-icons/fa';
import {
    BiLogoJavascript,
    BiLogoPhp,
    BiLogoTailwindCss
} from 'react-icons/bi';
import { GrMysql } from 'react-icons/gr';
import gradPic from '../assets/gradpic.png';

const Home = () => {
  return (
    <div name="home" className='w-full h-full bg-white drop-shadow-md py-20 mb-1 pb-1'>
        <div className='flex flex-col justify-center items-center w-full h-full text-black'>
            <div className='flex flex-col items-center'>
                <img className="w-56 h-56 lg:mt-16 sm:mt-16 xs:mt-16 xs1:mt-16" src={gradPic} alt="Grad Pic"></img>
                <p className='text-2xl mb-2 ml-5 mt-10 text-center'>Howdy! 👋 I'm Arris and I am a <span className='text-3xl font-bold'>Front-end Developer</span> based in Cebu, Philippines. <a href='https://www.google.com/maps/@10.3403351,123.9130046,12.56z?entry=ttu' target='_blank'>📍</a></p>
            </div>
            <div className='max-w-[1000px] w-full px-4 gap-8'>
                <div className='pb-10 pl-4 lg:text-left md:text-left sm:text-left xs:text-left xs1:text-left xxs:text-left lg:mt-10 md1:mt-10 md:mt-10 sm:mt-5 xs-mt-10 xs1:mt-10'>
                    <p className='text-4xl font-bold inline border-b-4 border-yellow-500'>Skills</p>
                    <p className='py-6 text-slate-700 font-bold'>Here are the list of technologies and tools I know and use.</p>
                    <div className='pl-4 sm:mt-5 lg:text-left md:text-left justify-center'>

                        <div className='w-full lg:grid lg:grid-cols-8 md1:grid md1:grid-cols-8 md:grid md:grid-cols-8 sm:grid sm:grid-cols-4 xs1:grid xs1:grid-cols-4 xs:grid xs:grid-cols-4 xxs:grid xxs:grid-cols-4 gap-1 text-center lg:-mt-6 md1:-mt-6 md:-mt-6 sm:-mt-3 xs:-mt-3 xs1:-mt-3 xss:-mt-3'>
                            <div className='hover:scale-125 duration-300 flex flex-col items-center'>   
                                <FaHtml5 size={70} color='#FF4500'/>
                                <p>HTML</p>
                            </div>
                                
                            <div className='hover:scale-125 duration-300 flex flex-col items-center'>   
                                <FaCss3Alt size={70} color='#4169E1'/>
                                <p>CSS</p>
                            </div>
                                
                            <div className='hover:scale-125 duration-300 flex flex-col items-center'>   
                                <BiLogoJavascript size={70} color='#FFD700'/>
                                <p>JavaScript</p>
                            </div>

                            <div className='hover:scale-125 duration-300 flex flex-col items-center'>   
                                <BiLogoPhp size={70} color='#2F4F4F'/>
                                <p>PHP</p>
                            </div>

                            <div className='hover:scale-125 duration-300 flex flex-col items-center'>   
                                <FaReact size={70} color='#00CED1'/>
                                <p>React</p>
                            </div>

                            <div className='hover:scale-125 duration-300 flex flex-col items-center'>   
                                <FaBootstrap size={70} color='#9932CC'/>
                                <p>Bootstrap</p>
                            </div>

                            <div className='hover:scale-125 duration-300 flex flex-col items-center'>   
                                <BiLogoTailwindCss size={70} color='#20B2AA' />
                                <p>Tailwind</p>
                            </div>
                                
                            <div className='hover:scale-125 duration-300 flex flex-col items-center'>   
                                <GrMysql size={70} color='#4682B4'/>
                                <p>MySQL</p>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Home