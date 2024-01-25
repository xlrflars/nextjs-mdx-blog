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
        <nav className={`flex flex-1 fixed w-full shadow-lg bg-gradient-to-r from-blue-900 to-gray-600 dark:bg-gray-600 shadow ${navbarExpanded ? 'h-24' : 'h-20'}`}>
            <div className='container flex text-gray-200 dark:text-gray-100'>
                <div className='flex'>
                    <Link href={'/'}>
                        
                            <img
                                className='h-10'
                                src='https://icon-library.com/images/logo-icon/logo-icon-8.jpg'
                                alt='Logo'
                            />
                    
                    </Link>
                    <Link href={'/'} className='ml-20 navtext'>
                            My Blog
                       
                    </Link>
                </div>
                <div
                    className={
                        menuOpen
                            ? 'flex mt-1 text-2xl'
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
                <div className='flex py-2 px-4 text-3xl cursor-pointer' onClick={handleNav}>
                    <AiOutlineMenu />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
