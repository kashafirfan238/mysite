import React from "react";
import { useInView } from "react-intersection-observer";
import plc1  from '../Assets/plc1.png';
import plc2  from '../Assets/plc2.png';
import plc3  from '../Assets/plc3.png';
import plc4  from '../Assets/plc4.png';
import plc5  from '../Assets/plc5.png';
import plc6  from '../Assets/plc6.png';
// import HMI from '../Assets/HMI.png'
const AnimatedSection = ({ children, isLeft }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`text-center ${inView
          ? isLeft
            ? "animate_animated animatefadeInLeft animate_slow"
            : "animate_animated animatefadeInRight animate_slow"
          : ""
        }`}
    >
      {children}
    </div>
  );
};

const sectionsData = [
  {
    image: plc1,
    // title: "PI3000ig Series",
    // titledesc:"ig IIoT HMI, born specifically for the Internet of Things",

    description: [
      { line1: "Supports EtherCAT and USB TYPE-C" },
      { line2: "Supports IEC61131-3 LD programming mode,free-tag protocol" },
      { line3: "faster and more efficient communication" },
      { line4: "5MB large program capacity" },
      { line5: "512KB latched capacity" },
      { line6: "100KB register capacity" },
      { line7: "5MB free tag capacity" },
    ],
      
      btn:"Read more",
  },
  {
    image: plc2,
    title: "LX5V Series",
    titledesc:"",
    description:[
      { line1: "8-axis high speed pulse input and output" },
      { line2: "The basic execution speed is 0.01us~0.03us" },
      { line3: "8 external X interrupts supported(both rising and falling)" },
      { line4: "(High baud rate)921600bps" },
      { line5: "100us high-speed timing interrupt" },
      { line6: "Maximum 100 high-speed counting interrupts" },
    
    ],
      
    
      btn:"Read more",
      
  },
  {
    image: plc3,
    title: "LX5S Series",
    titledesc: "",
    description:[
      { line1: "High speed pulse input and output" },
      { line2: "The basic execution speed is 0.03us~0.08us" },
      { line3: "6 external X interrupts supported(both rising and falling)" },
      { line4: "USB power supply supported" },
    
    
    ],
  
      btn:"Read more",

  },

  {
    image: plc4,
    title: "LXEV Series",
   titledesc:"",
    description:[
      { line1: "High speed pulse input and output" },
      { line2: "Support encoder (AB phase)" },
      { line3: "Up to 200K pulse signalPower-down save" },
      { line4: "Program encryption protection" },
     
    
    ],
      
      btn:"Read more",

  },
  {
    image: plc5,
    title: "Expansion Module",
   titledesc:"",
    description:[
      { line1: "Multi-module connection" },
      { line2: "AD module resoluion :16 bits" },
      { line3: "WT module resoluion :24 bits" },
      { line4: "DA module resoluion :12 bits" },

    
    ],
     
      btn:"Read more",

  },
  {
    image: plc6,
    title: "BD Module",
   titledesc:"",
    description:[
      { line1: "LX3VP-ETH-BD" },
      { line2: "Supports Modbus-TCP protocol" },
      { line3: "Maximum 8 devices can be connected (no master-slave) to one LX3VP-EH-BD module" },
      { line4: "For Good real-time communication,strong correction ability and stable communication" },
      { line5: "Supports CANopen standard protocol DS301 V4.02" },
      { line7: "Supports 16 slave device when used as master" },
      { line8: "Free configuration by using CANopen network configuration software 'CANopen Tool'" },
      { line9: "It works as a master or a slave" },
    
    
    ],
     
      btn:"Read more",

  }
  ]

const Proseries2 = () => {
  return (
    
       <div className="bg-white overflow-hidden">
      {sectionsData.map((section, index) => (
        <AnimatedSection key={index} isLeft={index % 2 === 0}>
          <div
            className={`flex flex-wrap items-center mt-20 ${index % 2 === 1
                ? "flex-row-reverse animate_animated animate_backInRight"
                : "animate_animated animate_backInLeft"
              } text-left`}
          >
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src={section.image}
                alt={section.title - `${index}`}
              className="inline-block rounded h-96"/>
            </div>
            <div
              className={`w-full md:w-2/5 lg:w-1/2 px-4 ${index % 2 === 1
                  ? "md:order-first lg:pr-12"
                  : "md:order-first text-center md:text-left lg:pr-12"
                }`}
            >
              <h3 className="font-bold mt-8 text-xl text-[#fdab52]  md:mt-0 sm:text-2xl">
                {section.title}
              </h3>
              <h4 className="font-bold mt-8 text-md text-[#fdab52]  md:mt-0 sm:text-2xl">
              {section.titledesc}
              </h4>
            
                <>
                <ul>
                {section.description.map((line, index) => (
                  <li key={index}>{Object.values(line)[0]}</li>
                ))}
              </ul>
<button class ="px-3 py-3 my-2 bg-gradient-to-r from-[#fdab52] to-[#fdab52] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">{section.btn}</button>

</>

 

              
             
              
              <hr />
            
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  )
}

export default Proseries2
