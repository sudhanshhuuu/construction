import React from 'react';
import { motion } from 'framer-motion';
import missionImg from '../assets/mission.png';  // Add your mission image
import visionImg from '../assets/vission.png';    // Add your vision image
import qualityImg from '../assets/quality.png';    // Add your vision image

import { FaSketch, FaClock, FaUsers } from 'react-icons/fa';


const MissionVisionQuality = () => {
    return (
        <>
            <section className="bg-white text-gray-800 py-16 px-4 sm:px-8 space-y-24">

                {/* Mission Section */}
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    {/* Text Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-5"
                    >
                        <h2 className="text-3xl font-bold text-blue-700">Our Mission</h2>
                        {/* Mission Text */}
                        <p className="text-gray-700 leading-relaxed">
                            Our mission is to deliver exceptional engineering and construction solutions that meet the highest standards of <strong>quality, safety, and sustainability</strong>. We aim to exceed expectations through <strong>cost-effective planning</strong>, <strong>precise execution</strong>, and an unwavering commitment to <strong>on-time delivery</strong>.
                        </p>
                        <p className="text-gray-700">
                            We believe in building more than just structures—we build <strong>lasting partnerships</strong> based on <strong>trust, performance</strong>, and <strong>complete client satisfaction</strong>.
                        </p>
                    </motion.div>

                    {/* Image Right */}
                    <motion.img
                        src={missionImg}
                        alt="Mission"
                        className="w-full rounded-xl shadow-xl object-cover h-80"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    />
                </div>

                {/* Vision Section */}
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                    {/* Image Left */}
                    <motion.img
                        src={visionImg}
                        alt="Vision"
                        className="w-full rounded-xl shadow-xl object-cover h-80 order-2 md:order-1"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    />

                    {/* Text Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-5 order-1 md:order-2"
                    >
                        <h2 className="text-3xl font-bold text-blue-700">Our Vision</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our vision is to be recognized as a <strong>trusted leader</strong> in the construction industry, known for delivering <strong>safe, innovative, and high-impact projects</strong> that shape a better future.
                        </p>
                        <p className="text-gray-700">
                            We are driven by a passion to empower communities, support businesses, and turn visionary ideas into <strong>architectural realities</strong>.
                        </p>


                    </motion.div>
                </div>

                {/* Quality Section */}

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    {/* Text Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-5"
                    >
                        <h2 className="text-3xl font-bold text-blue-700">Our Commitment to Quality</h2>
                        <p className="text-gray-700 leading-relaxed">
                            “Quality is never by chance—it is the outcome of <strong>purposeful planning</strong>, <strong>passionate effort</strong>, <strong>expert guidance</strong>, and <strong>flawless execution</strong>.”
                        </p>
                        <p className="text-gray-700">
                            At every step, we ensure our work reflects our <strong>dedication to excellence</strong> and our promise to deliver <strong>reliable, resilient, and refined results</strong>.
                        </p>

                    </motion.div>

                    {/* Image Right */}
                    <motion.img
                        src={qualityImg}
                        alt="Mission"
                        className="w-full rounded-xl shadow-xl object-cover h-80"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    />
                </div>

            </section>

            <section className=' bg-white text-gray-800 py-6 px-4 sm:px-8 space-y-24'>
                {/* Company Values */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold text-blue-700 mb-10">Our Core Strengths</h2>
                    <div className="grid sm:grid-cols-3 gap-8">
                        <div className="bg-white shadow-md p-6 rounded-lg">
                            <FaSketch className="text-blue-500 text-4xl mx-auto mb-3" />
                            <h3 className="text-lg font-semibold">Sketching & Design</h3>
                            <p className="text-gray-600 text-sm">Innovative and functional architectural concepts.</p>
                        </div>
                        <div className="bg-white shadow-md p-6 rounded-lg">
                            <FaClock className="text-blue-500 text-4xl mx-auto mb-3" />
                            <h3 className="text-lg font-semibold">Time Management</h3>
                            <p className="text-gray-600 text-sm">On-time delivery with disciplined scheduling.</p>
                        </div>
                        <div className="bg-white shadow-md p-6 rounded-lg">
                            <FaUsers className="text-blue-500 text-4xl mx-auto mb-3" />
                            <h3 className="text-lg font-semibold">Teamwork Building</h3>
                            <p className="text-gray-600 text-sm">Strong collaboration between departments & field teams.</p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>


    );
};

export default MissionVisionQuality;
