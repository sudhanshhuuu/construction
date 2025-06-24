import React from 'react';
import { motion } from 'framer-motion';

const EmployeeStrength = () => {
  const team = [
    { role: 'Managers', count: 4, icon: '👷' },
    { role: 'Engineers', count: 8, icon: '🧑‍🔧' },
    { role: 'Supervisors', count: 15, icon: '🧑‍🏭' },
    { role: 'Foremen', count: 8, icon: '🧑‍🏭' },
    { role: 'Mechanics', count: 6, icon: '🔧' },
  ];

  return (
    <section className="bg-gradient-to-r from-white to-blue-50 py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-blue-800 mb-12"
        >
          Our Strength
        </motion.h2>

        {/* Circle Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-xl rounded-full w-36 h-36 flex flex-col items-center justify-center mx-auto hover:scale-105 transition duration-300"
            >
              <div className="text-4xl mb-2">{member.icon}</div>
              <div className="text-xl font-bold text-blue-600">{member.count}</div>
              <div className="text-sm text-gray-600">{member.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmployeeStrength;
