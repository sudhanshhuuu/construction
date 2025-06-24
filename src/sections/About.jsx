import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
        
            <div
                id='about'
                className='w-full max-w-[1200px] mx-auto py-16 px-4 sm:px-8 flex flex-col lg:flex-row justify-between items-start gap-12'
            >
                {/* Left Side */}
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    variants={slideUpVariants}
                    className='lg:w-1/2 w-full flex flex-col justify-center items-start gap-6'
                >
                    <motion.h1
                        variants={slideUpVariants}
                        className='uppercase text-blue-500 text-xl sm:text-2xl font-semibold'
                    >
                        Welcome to
                    </motion.h1>
                    <motion.h1
                        variants={slideUpVariants}
                        className='text-white uppercase text-3xl sm:text-4xl md:text-5xl font-bold leading-tight'
                    >
                        U.K SUPERTECH CONSTRUCTION ENTERPRISE
                    </motion.h1>
                    <div className='w-[100px] h-[4px] sm:w-[120px] sm:h-[6px] bg-blue-500'></div>
                    <p className='text-xl sm:text-2xl italic text-gray-100 mt-6'>
                        Your Trusted Partner in Construction for Over 25 Years
                    </p>
                </motion.div>

                {/* Right Side */}
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    variants={slideUpVariants}
                    className='lg:w-1/2 w-full flex flex-col justify-center items-start gap-6'
                >
                    <p className='text-white text-base sm:text-lg text-justify leading-relaxed'>
                        With a wealth of experience in the construction industry, Sumon Structures leads the way in delivering quality, safety, and reliability. Our team of experts is dedicated to providing the highest standards in every project, big or small.
                    </p>
                    <p className='text-white text-base sm:text-lg text-justify leading-relaxed'>
                        Explore our extensive portfolio and discover why we are the go-to builders for projects across the region.
                    </p>

                    <Link to='/about'>
                        <motion.button
                            variants={zoomInVariants}
                            className='bg-blue-500 text-white font-bold px-8 py-3 rounded-md transition duration-300 hover:bg-white hover:text-black shadow-md'
                        >
                            Learn More
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </>
    );
};

export default About;
