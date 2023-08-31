import React from 'react';
import todo from '../assets/todo.png';


const Projects = () => {
  return (
    <div name='projects' className='w-full h-screen bg-white drop-shadow-md lg:mt-2 md:mt-2 md1:mt-2 sm:mt-1 xs1:mt-1 lg:pb-0 md1:pb-0 md:pb-0 sm:pb-0 xs:pb-32 xs1:pb-32 xxs:pb-32'>
        <div className='max-w-[62.5rem] mx-auto lg:-mt-16 md:-mt-16 px-8 flex flex-col justify-center w-full h-screen'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-500'>Projects</p>
                <p className='py-6 text-slate-700 font-bold'>Check out some of my awesome works!</p>
            </div>
            
            <div className='text-slate-700 font-bold'>
                <div className='shadow-sm h-full w-full shadow-[#444444] container rounded-md flex justify-center items-center mx-auto'>
                    <div className='kanit drop-shadow-lg text-center flex'>
                        <div className='lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 xs:flex xs:flex-col xs:items-center lg:gap-2 md:gap-2 sm:gap-2 xs:gap-0 xs1:gap-0 items-center justify-center p-5'>
                        <img className="py-5 lg:w-[25rem] md:w-[25rem] md1:w-[25rem] sm:w-[12.5rem] sm:h-[12.5rem] xs1:w-[9.5rem] xs1:h-[9.5rem] xs:w-[9.5rem] xs:h-[9.5rem] xxs:w-[9.5rem] xxs:h-[9.5rem]" src={todo} alt="Aesthetic image"></img>
                            <div className=''>
                                <span className='lg:text-2xl md1:text-2xl md:text-2xl font-bold tracking-wider'>
                                    Todo List
                                </span>
                                <div className='p-2 lg:text-base md1:text-base md:text-base'>
                                    A simple Todo list app made with React and Tailwind.
                                </div>
                                {/* Hover options */}
                                <div className='pt-8 text-center'>
                                    <a href="https://yanzpdev-todo.vercel.app/" target='_blank'>
                                        <button className='hover:scale-125 duration-300 text-center rounded-lg px-4 py-3 m-2 bg-red-600 text-white font-bold'>Demo</button>
                                    </a>
                                    <a href="https://github.com/yanzpdev/react-todo-list-app" target='_blank'>
                                        <button className='hover:scale-125 duration-300 text-center rounded-lg px-4 py-3 m-2 bg-red-600 text-white font-bold'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
