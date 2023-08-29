import React from 'react';
import work2 from '../assets/work2.png';

const Projects = () => {
  return (
    <div name='projects' className='w-full h-screen bg-white drop-shadow-md lg:mt-20 md:mt-20 md1:mt-20 sm:mt-1 xs1:mt-36 lg:pb-0 md1:pb-0 md:pb-0 sm:pb-0 xs:pb-32 xs1:pb-32 xxs:pb-32'>
        <div className='max-w-[62.5rem] mx-auto px-8 flex flex-col justify-center w-full h-screen'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-500'>Projects</p>
                <p className='py-6 text-slate-700 font-bold'>Check out some of my awesome works!</p>
            </div>
            
            <div className='grid grid-cols-1  text-slate-700 font-bold'>
                <div className='shadow-sm shadow-[#444444] h-[62.5rem] container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='kanit drop-shadow-lg text-center flex'>
                        <div className='grid grid-cols-2 gap-2 justify-center px-5'>
                        <img className="rounded-lg" src={work2} alt="Aesthetic image" style={{width: 400, height: 200}}></img>
                            <div>
                                <span className='text-2xl font-bold tracking-wider'>
                                    Todo List
                                </span>
                                <div className='p-2 text-sm'>
                                    A simple Todo list app made with React and Tailwind.
                                </div>
                                {/* Hover options */}
                                <div className='pt-8 text-center'>
                                    <a href="https://react-todolistapp.vercel.app/">
                                        <button className='hover:scale-125 duration-300 text-center rounded-lg px-4 py-3 m-2 bg-red-600 text-white font-bold'>Demo</button>
                                    </a>
                                    <a href="https://github.com/yanzpdev/react-todolistapp">
                                        <button className='hover:scale-125 duration-300 text-center rounded-lg px-4 py-3 m-2 bg-red-600 text-white font-bold'>Code</button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='shadow-sm shadow-[#444444] h-[62.5rem] group container rounded-md flex justify-center items-center mx-auto content-div mt-3'>
                    <div className='kanit drop-shadow-lg text-center flex'>
                        <div className='grid grid-cols-2 gap-2 justify-center px-5'>
                        {/* <img className="rounded-lg" src={work2} alt="Aesthetic image" style={{width: 400, height: 200}}></img> */}
                        <h1>Coming soon!</h1>
                            <div className='max-w-[400px] flex flex-col items-center'>
                                <span className='text-2xl font-bold tracking-wider'>
                                    Shoppaholic
                                </span>
                                <div className='p-2 text-sm'>
                                    An E-commerce app that focuses on a simple and clean interface that prioritizes user experience.
                                </div>
                                {/* Hover options */}
                                <div className='pt-8 text-center'>
                                    <a href="https://react-todolistapp.vercel.app/">
                                        <button className='hover:scale-125 duration-300 text-center rounded-lg px-4 py-3 m-2 bg-red-600 text-white font-bold'>Demo</button>
                                    </a>
                                    <a href="/">
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