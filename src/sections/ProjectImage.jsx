import React, { useEffect, useRef } from 'react';
import img1 from '../assets/project/1.png';
import img2 from '../assets/project/2.png';
import img3 from '../assets/project/3.png';
import img4 from '../assets/project/4.png';
import img5 from '../assets/project/5.png';
import img6 from '../assets/project/6.png';
import img7 from '../assets/project/7.png';
import img8 from '../assets/project/8.png';
import img9 from '../assets/project/9.png';
import img10 from '../assets/project/11.png';
import img11 from '../assets/project/11.png';
import img12 from '../assets/project/12.png';
import img13 from '../assets/project/13.png';


const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13
];

const ProjectImage = () => {
  const scrollRef = useRef();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      scrollAmount += 1;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(autoScroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden relative w-full py-10">
      <div
        ref={scrollRef}
        className="flex gap-10 w-max animate-scroll-slow"
        style={{ scrollBehavior: 'smooth' }}
      >
        {[...images, ...images].map((img, index) => (
          <div
            key={index}
            className={`relative flex-shrink-0 w-[300px] h-[400px] transition-all duration-300 hover:scale-105 group`}
          >
            <div className="mirror-wrapper relative w-full h-full overflow-hidden rounded-2xl shadow-xl">
              <img
                src={img}
                alt={`img-${index}`}
                className="object-cover w-full h-full rounded-2xl mirror-img group-hover:scale-110 transition-all duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectImage;
