import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { planning } from '../export';


const Working = () => {
    return (
        <>
            <div id="working" className="w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={slideUpVariants}
                    className="max-w-7xl w-[90%] mx-auto flex flex-col items-center gap-6"
                >
                    <motion.h3
                        variants={slideUpVariants}
                        className="text-blue-600 text-xl sm:text-2xl uppercase tracking-wider"
                    >
                        Step by Step
                    </motion.h3>

                    <motion.h2
                        variants={slideUpVariants}
                        className="uppercase text-black text-3xl sm:text-5xl font-extrabold text-center leading-snug"
                    >
                        How It's Working
                    </motion.h2>

                    <motion.div
                        variants={zoomInVariants}
                        className="w-24 h-1.5 bg-blue-500 rounded-full mb-8"
                    />

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={zoomInVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full"
                    >
                        {planning.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl border border-blue-200 transition duration-300 flex flex-col items-center text-center space-y-4"
                            >
                                <div className="bg-gradient-to-tr from-blue-500 to-blue-700 text-white p-4 rounded-full shadow-lg">
                                    <item.icon className="size-10 sm:size-12" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-800 hover:text-blue-600 transition duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    {item.about}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </>

    );
};

export default Working;
