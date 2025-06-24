import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { allservices } from '../export';
import MachineryEquipments from './MachineryEquipments';

const Services = () => {
  return (
   <>
     <div id="services" className="w-full bg-gradient-to-br from-white to-blue-50 py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="w-[90%] lg:w-[80%] mx-auto flex flex-col items-center gap-6"
      >
        {/* Header */}
        <motion.h3
          variants={slideUpVariants}
          className="text-blue-600 text-xl sm:text-2xl uppercase tracking-wider"
        >
          Special Services
        </motion.h3>

        <motion.h2
          variants={slideUpVariants}
          className="uppercase text-black text-3xl sm:text-5xl font-extrabold text-center leading-snug"
        >
          Our Best Services
        </motion.h2>

        <motion.div
          variants={zoomInVariants}
          className="w-24 h-1.5 bg-blue-500 rounded-full mb-10"
        />

        {/* Service Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {allservices.map((service, index) => (
            <motion.div
              key={index}
              variants={zoomInVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white border border-blue-100 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition duration-300 flex flex-col items-start gap-4"
            >
              {/* Icon */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-16 h-16 p-2 rounded-lg flex items-center justify-center shadow-md hover:scale-110 transition duration-300">
                <img
                  src={service.icon}
                  alt="icon"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title + Description */}
              <div className="space-y-2 mt-2">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {service.about}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
    <MachineryEquipments />
   </>
  );
};

export default Services;
