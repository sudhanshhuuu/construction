import React from 'react';
import { motion } from 'framer-motion';
import bannerImage from '../assets/OurMajorClients/Banner.png'; // Replace with your actual image

const clients = [
  "Hanumant Residency",
  "Dwarka City",
  "Palm Springs",
  "CAT College",
  "Shantikunj Haridwar",
  "COER University Haridwar",
  "Jaipuriya School, Roorkee",
  "CAT College, Roorkee",
  "Industrial Building",
  "Radhey Shyam Hospital, Roorkee",
  "Farm House/Villa"
];

const OurMajorClients = () => {
  return (
    <div className="font-sans text-gray-800 bg-[#f7fcfd]">
      {/* Banner */}
      <div
        className="bg-cover bg-center h-[250px] md:h-[350px] flex flex-col justify-center items-center text-white text-center px-4"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold drop-shadow-lg"
        >
          Our Major Clients
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-4 text-lg md:text-xl max-w-2xl"
        >
          We've had the privilege of working with prestigious institutions, real estate projects, hospitals, and more.
        </motion.p>
      </div>

      {/* Hexagon Clients */}
      <div className="py-16 px-4 md:px-12 bg-[#f7fcfd]">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Trusted Clients</h2>
        <div className="flex direction-row flex-wrap justify-center gap-4">
          {clients.map((clients, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="hexagon-wrapper"
            >
              <div className="hexagon text-black text-sm md:text-base">
                {clients}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMajorClients;
