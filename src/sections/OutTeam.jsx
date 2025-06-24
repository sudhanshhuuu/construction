import React from 'react';
import { motion } from 'framer-motion';
import bannerImage from '../assets/ourteam/Banner.png'; // Your banner image

// Sample images for each team role
import architect from '../assets/ourteam/architect.png';
import machineOperator from '../assets/ourteam/machine-operator.png';
import engineer from '../assets/ourteam/engineer.png';
import labour from '../assets/ourteam/labour.png';
import fabricator from '../assets/ourteam/fabricator.png';
import designer from '../assets/ourteam/designer.png';
import plumber from '../assets/ourteam/plumber.png';
import carpenter from '../assets/ourteam/carpenter.png';
import electrician from '../assets/ourteam/electrician.png';

const teamMembers = [
  { role: "ARCHITECTS", image: architect },
  { role: "MACHINE OPERATORS", image: machineOperator },
  { role: "ENGINEERS", image: engineer },
  { role: "EXPERT LABOUR", image: labour },
  { role: "FABRICATORS", image: fabricator },
  { role: "INTERIOR DESIGNERS", image: designer },
  { role: "PLUMBERS", image: plumber },
  { role: "CARPENTERS", image: carpenter },
  { role: "ELECTRICIANS", image: electrician },
];

const OurTeam = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Banner Section */}
      <div
        className="bg-cover bg-center h-[300px] md:h-[400px] flex flex-col justify-center items-center text-white text-center px-4"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold drop-shadow-lg"
        >
          Our Team
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-4 text-lg md:text-xl font-medium max-w-2xl"
        >
          Meet our dedicated and skilled team that brings your vision to life.
        </motion.p>
      </div>

      {/* Team Grid */}
      <div className="py-16 px-4 md:px-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Team Members
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img src={member.image} alt={member.role} className="h-60 w-full object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-700">{member.role}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
