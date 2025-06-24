import React from 'react';
import { motion } from 'framer-motion';
import { FaSketch, FaClock, FaUsers } from 'react-icons/fa';

const AboutCompanyPage = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Employee Strength & Contact */}
        

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

        {/* Mission, Vision, Quality */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-blue-50 rounded-2xl p-8 shadow-xl space-y-10"
        >
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Mission</h2>
            <p className="text-gray-700">
              To undertake engineering and construction projects with a focus on cost leadership while meeting stringent quality, safety, environmental, and timely delivery requirements. We aim to build long-term relationships based on integrity, performance, value, and customer satisfaction.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Vision</h2>
            <p className="text-gray-700">
              To be the first choice in construction and engineering by consistently delivering safe, innovative, and successful projects that support community growth and help clients bring their vision to life.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Quality</h2>
            <p className="text-gray-700">
              Quality is never an accident — it’s the result of sincere effort, intelligent planning, and skilled execution. We are committed to excellence in every project.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCompanyPage;
