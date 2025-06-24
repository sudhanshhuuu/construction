import React from 'react';
import banneraboutus from "../assets/aboutUs/aboutus1.png"

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 text-white min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
      
      {/* Left: Image */}
      <div className="w-1/2 hidden md:block h-full">
        <img 
          src={banneraboutus}  // Replace with actual image path or import
          alt="Construction Site"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right: Overlay Content */}
      <div className="w-full md:w-1/2  to-black px-6 sm:px-10 py-12 md:py-0 flex flex-col justify-center h-full">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            U.K. SUPERTECH CONSTRUCTION ENTERPRISES
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-md">
            Building the Future. Restoring the Past.
            Trusted for over 25+ years in construction and architecture.
          </p>
          <p  className="inline-block bg-blue-400 hover:bg-blue-100 text-black font-semibold px-6 py-3 rounded-lg transition duration-300">
            About Us
          </p>
        </div>
      </div>

      {/* Mobile Background */}
      <div className="md:hidden absolute inset-0 z-[-1]">
        <img 
          src= {banneraboutus} 
          alt="Background"
          className="object-cover w-full h-full opacity-30"
        />
      </div>
    </section>
  );
};

export default HeroBanner;
