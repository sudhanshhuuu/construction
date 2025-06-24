import React, { useState, useEffect } from 'react';
import heroimg from '../assets/heroimg.png';
import background1 from '../assets/banner1.png';
import background2 from '../assets/banner2.png';
import background3 from '../assets/banner3.png';
import background4 from '../assets/banner4.png';
import { motion, AnimatePresence } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import About from './About';
import Services from './Services';
import Working from './Working';
import ProjectImage from './ProjectImage';
import { Link } from 'react-router-dom';
import Offer from './Offer';
import CardContactUs from './CardContactUs';
import MachineryEquipments from './MachineryEquipments';

const images = [background1, background2, background3, background4];

const Hero = () => {
    const [bgIndex, setBgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="relative overflow-hidden w-full h-[100vh] m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px]">
                {/* Background transition layer */}
                <AnimatePresence>
                    <motion.div
                        key={bgIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
                        style={{ backgroundImage: `url(${images[bgIndex]})` }}
                    />
                </AnimatePresence>

                {/* Content Layer */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={slideUpVariants}
                    className="relative z-10 lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4"
                >
                    <motion.h1
                        variants={slideUpVariants}
                        className="text-blue-500 text-xl sm:text-2xl font-bold"
                    >
                        WE ARE BUILDERS
                    </motion.h1>
                    <motion.h1
                        variants={slideUpVariants}
                        className="text-white uppercase text-xl font-bold sm:text-[50px] "
                    >
                        we will build your dream
                    </motion.h1>
                    <div className="w-[120px] h-[6px] bg-blue-500"></div>
                    <p className="text-white text-[13px] sm:text-[20px]">
                        Whether you’re dreaming of a new structure or enhancing an existing space, Sumon Structures is here to make it happen. With unmatched expertise and dedication, we ensure a smooth building experience from start to finish.
                    </p>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={zoomInVariants}
                        className="flex justify-normal items-center gap-5 flex-col sm:flex-row "
                    >
                        <Link to="/about">
                            <motion.button
                                variants={zoomInVariants}
                                className=" bg-blue-500 hover:bg-black text-black hover:text-white px-10 py-3 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex " >
                                READ MORE
                            </motion.button>
                        </Link>
                        <motion.a
                            href="https://wa.me/919917631340?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="bg-blue-500 hover:bg-black text-black hover:text-white px-10 py-3 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex ">
                                REACH US
                            </button>
                        </motion.a>
                    </motion.div>
                </motion.div>

                
            </div>

            <About />
            <ProjectImage />
            <Services />
            <Offer />
            <Working />
            <CardContactUs />
            {/* <MachineryEquipments /> */}
            
        </>
    );
};

export default Hero;
