import React from 'react';
import { FaMobileAlt, FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaRegNewspaper } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
  return (
    <div name="contact" className='w-full h-full bg-white p-4 flex justify-center mt-20'>
        <form action='https://getform.io/f/5000378e-92d0-4d69-b901-7f61c304cb8a' method='POST' className='flex flex-col max-w-[37.5rem] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-500'>Contact</p>
                <p className='py-6 text-slate-700 font-bold'>Get in touch with me, hit me up!</p>
                <div className='flex items-center text-slate-700 font-bold'>
                    <div className='flex items-center w-1/2 hover:scale-125 transition duration-500'>
                        <p className='px-2'><FaMobileAlt size={30}/> </p>
                        <p className='px-2 font-sans'> +639762044018 </p>
                    </div>

                    <div className='flex items-center w-1/2 hover:scale-125 transition duration-500 text-slate-700 font-bold'>
                        <p className='px-2'><AiOutlineMail size={30}/> </p>
                        <a href='mailto:peraltaarris07@gmail.com' className='px-2 '> peraltaarris07@gmail.com </a>
                    </div>
                </div>
            </div>
            <p className='pb-4 text-slate-700 font-bold'>Or, submit a form.</p>
            <input className='p-2 text-slate-700 font-bold rounded-md bg-slate-200' type='text' placeholder='Name' name='name'></input>
            <input className='my-4 text-slate-700 font-bold p-2 rounded-md bg-slate-200' type='text' placeholder='Email' name='email'></input>
            <textarea placeholder='Message' className='p-2 text-slate-700 font-bold rounded-md h-36 bg-slate-200' name="message" cols="30" rows="10"></textarea>
            <div className='flex justify-center'>
                <button className='text-2xl my-2 p-2 border-2 bg-slate-900 h-16 text-white rounded-lg w-1/2 hover:bg-yellow-500'>Send</button>
            </div>
        </form>
    </div>
  )
}

export default Contact