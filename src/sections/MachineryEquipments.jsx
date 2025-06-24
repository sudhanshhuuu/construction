import React from 'react';

import JCB from "../assets/MachineEquipments/JCB.png";
import WaterTankers from "../assets/MachineEquipments/Water-Tankers.png";
import BarBendingMachine from "../assets/MachineEquipments/Bar-Bending-Machine.png";
import WoodCuttingMachine from "../assets/MachineEquipments/Wood-Cutting-Machine.png";
import BarCuttingMachine from "../assets/MachineEquipments/Bar-Cutting-Machine.png";
import MSSteelPlateMachine from "../assets/MachineEquipments/M-S-Steel-plate-Machine.png";
import ShutteringMaterials from "../assets/MachineEquipments/Shuttering-Materials.png";
import MSPipeAppurtenances from "../assets/MachineEquipments/M-S-pipe-&-appurtenances.png";
import HoistLift from "../assets/MachineEquipments/Hoist-&-Lift.png";
import WeldingMachine from "../assets/MachineEquipments/Welding-Machine.png";
import Transformer from "../assets/MachineEquipments/Transformer.png";

const equipments = [
  { name: 'JCB', img: JCB },
  { name: 'Water Tankers', img: WaterTankers },
  { name: 'Bar Bending Machine', img: BarBendingMachine },
  { name: 'Wood Cutting Machine', img: WoodCuttingMachine },
  { name: 'Bar Cutting Machine', img: BarCuttingMachine },
  { name: 'M.S. Steel plate Machine', img: MSSteelPlateMachine },
  { name: 'Shuttering Materials', img: ShutteringMaterials },
  { name: 'M.S. pipe & appurtenances', img: MSPipeAppurtenances },
  { name: 'Hoist & Lift', img: HoistLift },
  { name: 'Welding Machine', img: WeldingMachine },
  { name: 'Transformer', img: Transformer },
];

const MachineryEquipments = () => {
  return (
    <div
      className="w-full py-16 px-4 sm:px-8 bg-cover bg-center"
      style={{
        backgroundImage: 'url("/images/construction-bg.jpg")',
      }}
    >
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 drop-shadow-lg animate-fade-in-up">
          MACHINERY & EQUIPMENTS
        </h2>
        <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto text-blue-100 drop-shadow-sm leading-relaxed animate-fade-in-up delay-100">
          We have our own concrete plant also. Below is the primary equipment we have in our fleet, ensuring precision, quality, and speed on every construction project.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {equipments.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl shadow-xl overflow-hidden h-48 flex items-center justify-center text-white hover:scale-105 transition-transform duration-300"
            >
              {/* Blurred background image */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  // filter: 'blur(2px)',
                  transform: 'scale(1.05)',
                }}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40" />

              {/* Centered Styled Text */}
              <div className="relative z-10 text-center px-3 py-2 bg-black/40 backdrop-blur-sm rounded-md">
                <h3 className="text-white text-lg md:text-xl font-bold drop-shadow-md tracking-wide">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MachineryEquipments;
