'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navbarExpanded, setNavbarExpanded] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
        setNavbarExpanded(!navbarExpanded);
    };

    return (
        <nav className={`flex md:flex-1 fixed w-full shadow-lg bg-gradient-to-r to-lime-600 via-blue-900 from-blue-950 dark:bg-gray-600 shadow ${navbarExpanded ? 'ease-in duration-1000 h-28 md:h-36 lg:36' : 'h-24 duration-500 ease-in'}`}>
            <div className='container flex justify-between md:items-center md:p-6 text-gray-200 dark:text-gray-100'>
                <div className='hidden md:flex md:ml-10'>
                    
                        
                            <img
                                className='h-10 w-10 md:h-10 lg:h-10'
                                src='https://icon-library.com/images/logo-icon/logo-icon-8.jpg'
                                alt='Logo'
                            />
                    
                    
                    <Link href={'/'} className='ml-2 md:navtext lg:navtext'>
                            My Blog
                       
                    </Link>
                </div>
                <div className="flex ml-10 mt-8 md:hidden">
                <img
                                className='h-10 w-10 md:h-10 lg:h-10'
                                src='https://icon-library.com/images/logo-icon/logo-icon-8.jpg'
                                alt='Logo'
                            />
                </div>
                <div 
                    className={
                        menuOpen
                            ? 'md:flex mt-9 text-lg md:mt-1 md:text-2xl'
                            : 'hidden'
                    }>
                    <Link href={'/'} className='navlink'>
                        Home
                    </Link>
                    <Link href={'/blog'} className='navlink'>
                        Blog
                    </Link>
                    <Link href={'/about'} className='navlink'>
                        About
                    </Link>
                </div>
                
                <div className='flex py-10 px-10 md:py-2 md:px-4 md:text-3xl cursor-pointer' onClick={handleNav}>
                    <AiOutlineMenu />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
