import React from "react";
import { useInView } from "react-intersection-observer";
import HMI from '../Assets/HMI.png'
import { Link } from "react-router-dom";

const AnimatedSection = ({ children, isLeft }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (

    <div
      ref={ref}
      className={`text-center ${inView
        ? isLeft
          ? "animate_animated animate__fadeInLeft animate__slow"
          : "animate_animated animate__fadeInRight animate__slow"
        : ""
      }`}
    >
      {children}
    </div>
  );
};

const sectionsData = [
  {
    image: HMI,
    title: "PI3000ig Series",
    titledesc: "ig IIoT HMI, born specifically for the Internet of Things",

    description: [
      { line1: "Equipment management" },
      { line2: "Alarm push" },
      { line3: "Remote Operation and maintenance" },
      { line4: "Cloud SCADA " },
    ],

    btn: "Read more",
  },

  {
    image: HMI,
    title: "PI3000i Series",
    titledesc: "PI 3000i series  HMI.",
    description: [
      { line1: "1 Optional with 7 inch and 10.2 inch" },
      { line2: "2 Optional Ethernet port" },
      { line3: "3 Power consumption>8W" },
    ],

    btn: "Read more",
  },
  {
    image: HMI,
    title: "PI 3000ie Series",
    titledesc: "Multi-core processor with super smooth and fast speed",
    description: [
      { line1: "Power on in 6 seconds" },
      { line2: "Screen switching,300+ popular PLC brands&series protocols supported" },
      { line3: "50+ screen parts supported" },
      { line4: "LUA script supported" },
    ],

    btn: "Read more",
  },

  {
    image: HMI,
    title: "PI8000 Series",
    titledesc: "PI 8000 series HMI.",
    description: [
      { line1: "32G SD card supported" },
      { line2: "64G U disk storage supported" },
      { line3: "Ethernet supported, CAN bus(optional)" },
      { line4: "RS232 | RS485 | RS422 supported, LUA SCRIPT supported" },
      { line5: "LUA SCRIPT supported" },
    ],

    btn: "Read more",
  }
]

const ProSeries = () => {
  return (
    <div className="bg-white overflow-hidden">
      {sectionsData.map((section, index) => (
        <AnimatedSection key={index} isLeft={index % 2 === 0}>
          <div
            className={`flex flex-wrap items-center mt-20 ${index % 2 === 1
              ? "flex-row-reverse animate_animated animate__backInRight"
              : "animate_animated animate__backInLeft"
              } text-left`}
          >
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src={section.image}
                alt={section.title - `${index}`}
                className="inline-block rounded h-96" />
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
                <ul className="mb-4">
                  {section.description.map((line, index) => (
                    <li key={index}>{Object.values(line)[0]}</li>
                  ))}
                </ul>
                <Link to={`/prodetail/${section.title}`} className="px-3 py-2  bg-gradient-to-r from-[#fdab52] to-[#fdab52] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                  {section.btn}
                </Link>
              </>
              <hr className="mt-4" />
            </div>
           

          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default ProSeries;
