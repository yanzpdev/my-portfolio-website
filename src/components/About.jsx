import React from 'react';
import bg from '../assets/aesthetic.jpg';

const About = () => {
  return (
    <div name="about" className='w-full h-full bg-white drop-shadow-md py-20 -mt-0.5'>
        <div className='flex flex-col justify-center items-center w-full h-full text-black'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='pb-8 pl-4 sm:mt-5 lg:text-left md:text-left'>
                    <p className='text-4xl font-bold inline border-b-4 border-yellow-500'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full sm:flex flex-col gap-8 px-7 lg:visible md1:visible md:visible sm:visible xs:visible xs1:visible'>
                <div className='lg:grid lg:grid-cols-2 lg:gap-8 md1:grid md1:grid-cols-2 md1:gap-8 md:grid md:grid-cols-2 md:gap-8 sm:flex sm:flex-col gap-8 sm:items-center'>
                    <img className="rounded-lg" src={bg} alt="Aesthetic image" style={{width: 500, height: 420}}></img>
                    <p className='mb-24 text-justify lg:mt-0 text-slate-700 font-bold md1:mt-0 md:mt-0 sm:mt-0 xs:mt-7 xs1:mt-7 lg:px-0 md:px-0 sm:px-4'>
                        I completed my Bachelor of Science in Information Technology 
                        (BSIT) degree 🎓 at Eastern Visayas State University Main Campus - 
                        Tacloban City, Leyte in July 2022. As an aspiring Front-end developer, I have knowledge
                        and experience in HTML, CSS, JavaScript, PHP, React, and Tailwind.  
                        I specialize in creating responsive websites that prioritize user 
                        experience. I excel in crafting dynamic interfaces through clean and optimized code and applying 
                        modern development techniques. I am a collaborative team player and work together with the team to deliver exceptional 
                        web applications. I am also dedicated in aiming to be a full-stack 
                        developer in the future through dedication, hardwork, and love for my craft. 💻⚙️
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
