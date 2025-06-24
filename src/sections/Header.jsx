import React, { useState, useEffect } from 'react';
import { FaXmark, FaBars } from 'react-icons/fa6';
import whatsapp from '../assets/project/WhatsApp.png';
import { Link } from 'react-router-dom';
import logoCompany from "../assets/logoCompany.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const navItem = [
        { link: 'Home', path: '/' },
        { link: 'About', path: '/about' },
        { link: 'Services', path: '/services' },
        { link: 'Projects', path: '/projects' },
        { link: 'Contact', path: '/contact' },
    ];

    // Sticky header on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`w-full flex justify-between items-center gap-1 lg:px-16 px-6  z-50 transition-all duration-300 
                ${isSticky ? 'fixed top-0 bg-white shadow-md' : 'relative bg-white'}`}
            >
                <img src={logoCompany} alt="WhatsApp" className='w-24 h-24' />
                {/* Desktop Nav */}
                <ul className='lg:flex justify-normal items-center gap-6 hidden'>
                    {navItem.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.path}
                                className='text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-blue-500 hover:text-black text-[16px]'
                                onClick={closeMenu}
                            >
                                {item.link}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* WhatsApp Icon */}
                <a
                    href="https://wa.me/919917631340?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={whatsapp} alt="WhatsApp" className='w-10 h-10' />
                </a>

                {/* Mobile Toggle */}
                <div className='flex justify-between items-center lg:hidden mt-3' onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <FaXmark className='text-blue-500 text-3xl cursor-pointer' />
                    ) : (
                        <FaBars className='text-blue-500 text-3xl cursor-pointer' />
                    )}
                </div>

                {/* Mobile Menu */}
                <div
                    className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-blue-500 p-4 absolute top-[72px] left-0 transition-all duration-300`}
                    onClick={closeMenu}
                >
                    <ul className='flex flex-col justify-center items-center gap-2 w-full'>
                        {navItem.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.path}
                                    className='text-black uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center'
                                >
                                    {item.link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* GST Banner */}
            <div className='w-full h-[20px] bg-blue-500'>
                <p className='text-center text-white font-semibold text-[12px] lg:text-sm'>GST Number: 05AFUPI7278B1Z7</p>
            </div>
        </>
    );
};

export default Header;
