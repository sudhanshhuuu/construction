import React from 'react';
import { motion } from 'framer-motion';
import HeroBanner from './HeroBanner';
import bannerImg from '../assets/banner1.png'; // Use your image path
import EmployeeStrength from './EmployeeStrength';
import MissionVisionQuality from './MissionVisionQuality';
import MachineryEquipments from './MachineryEquipments';
import OurTeam from './OutTeam';        

const AboutUs = () => {
    return (
        <>
            <HeroBanner />

            <section className="relative w-full bg-gray-900 text-white" id="about">
                <div className="grid md:grid-cols-2 items-center max-w-7xl mx-auto py-16 px-6 sm:px-10 gap-10">

                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={bannerImg}
                            alt="Construction site"
                            className="rounded-xl shadow-xl object-cover w-full h-[400px] md:h-[500px]"
                        />
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400">
                            About U.K. SUPERTECH
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            Established in 1998, <strong>U.K. SUPERTECH CONSTRUCTION ENTERPRISES</strong> is a leading construction and architectural company based in India. With 25+ years of trust, we offer services in civil work, interior design, project consultancy, and full project execution.
                            <br />
                            Our Office
                            Address: South Civil Lines, Delhi Road, Roorkee, Haridwar (U.K.)
                            <br />

                            Contact: +91-9917631340, +91-9927631340
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
                            <div className="bg-gray-800 p-4 rounded-md">
                                <p className="font-semibold text-yellow-300">✔ 25+ Years of Experience</p>
                                <p className="text-gray-400">Reliable work since 1998</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-md">
                                <p className="font-semibold text-yellow-300">✔ 100+ Team Members</p>
                                <p className="text-gray-400">Engineers, technicians & labor</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-md">
                                <p className="font-semibold text-yellow-300">✔ Modern Equipment</p>
                                <p className="text-gray-400">JCB, lifts, bar cutters & more</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-md">
                                <p className="font-semibold text-yellow-300">✔ Trusted Clients</p>
                                <p className="text-gray-400">COER, Shantikunj, Jaipuriya School</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>
            <EmployeeStrength />
            <OurTeam />
            <MissionVisionQuality />
            <MachineryEquipments />


        </>
    );
};

export default AboutUs;
