import React from 'react';
import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';
import { Link } from 'react-scroll';


export default props => {
    const [isOpen, setOpen] = useState(false)

    const handleIsOpen = () => {
    setOpen(!isOpen)
    }

    const closeSideBar = () => {
    setOpen(false)
    }

  return (
    <div className='font-bold lg:hidden md1:hidden md:hidden'>
        <Menu 
            right     
            isOpen={isOpen}
            onOpen={handleIsOpen}
            onClose={handleIsOpen}
        >
            <Link to="home" smooth={true} duration={500} onClick={closeSideBar}>
                <a className="menu-item hover:text-red-800 duration-300" href="/">
                    Home
                </a>
            </Link>
            <Link to="about" smooth={true} duration={500} onClick={closeSideBar}>
                <a className="menu-item hover:text-red-800 duration-300" href="">
                    About
                </a>
            </Link>
            <Link to="projects" smooth={true} duration={500} onClick={closeSideBar}>
                <a className="menu-item hover:text-red-800 duration-300" href="">
                    Projects
                </a>
            </Link>                
            <Link to="contact" smooth={true} duration={500} onClick={closeSideBar}>
                <a className="menu-item hover:text-red-800 duration-300" href="">
                    Contact
                </a>
            </Link>
        </Menu>
    </div>

  );
};