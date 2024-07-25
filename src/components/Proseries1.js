import React from "react";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import servo1 from '../Assets/servo1.png';
import servo2 from '../Assets/servo2.png';
import servo3 from '../Assets/servo3.png';
import servo4 from '../Assets/servo4.png';
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
          ? "animate_animated animatefadeInLeft animate_slow"
          : "animate_animated animatefadeInRight animate_slow"
        : ""
      }`}
    >
      {children}
    </div>
  );
};

const Proseries1 = () => {
  const sectionsData = [
    {
      image: servo1,
      title: "VD3E Series",
      titledesc: "PI 8000 series HMI.",
      description: [
        { line1: "High performue CPU, 1ms high response" },
        { line2: "EtherCAT High-speed Bus Control" },
        { line3: "Real-time / High Precision/ Easy Wiring / Anti-interference" },
        {
          line4:
            "LX6V PLC with EtherCAT port can connect up to 128pcs servos,Support Homing Mode and Cyclic Synchronous Position Mode.",
        },
      ],
      btn: "Read more",
    },
    {
      image: servo2,
      title: "VD2 Series",
      titledesc: "PI 3000i series  HMI.",
      description: [
        { line1: "High response,Easy debugging" },
        { line2: "Coating protection" },
        { line3: "Virtual I/O function" },
        { line4: "Incremental Encoder and absolute Encoder supported" },
        {
          line5:
            "Internal multi-stage speed command supported,Brake output control supported",
        },
      ],
      btn: "Read more",
    },
    {
      image: servo3,
      title: "VD2F Series",
      titledesc: "Multi-core processor with super smooth and fast speed",
      description: [
        { line1: "Economical and cost-effective" },
        { line2: "Absolute Encoder supported" },
        { line3: "Internal multi-stage speed command supported" },
        { line4: "Internal multi-stage position command supported" },
        { line5: "Brake output control supported." },
      ],
      btn: "Read more",
    },
    {
      image: servo4,
      title: "Servo Motor",
      titledesc: "PI 8000 series HMI.",
      description: [
        {
          line1:
            "Cooling ensured: Integrated body design, better cooling system, better protection",
        },
        {
          line2:
            "Small size: The split encoder is adopted to significantly reduce the size of the motor",
        },
        {
          line3:
            "High working temperature: N38SH grade magnetic steel can work as high as 150℃. H grade enamel insulated wire is used and the insulation temperature is up to 180℃",
        },
        {
          line4:
            "Good components: Raw materials of an international brand are used, and high-quality, certificated trade companies are supplied to ensure the quality and stability of products.",
        },
      ],
      btn: "Read more",
    },
  ];

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
                className="inline-block rounded h-96"
              />
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
              {/* <h4 className="font-bold mt-8 text-md text-[#fdab52]  md:mt-0 sm:text-2xl">
                {section.titledesc}
              </h4> */}
              <ul>
                {section.description.map((line, index) => (
                  <li key={index}>{Object.values(line)[0]}</li>
                ))}
              </ul>
              <Link to={`/prodetail1/${section.title}`} className="px-3 py-2 mt-2 bg-gradient-to-r from-[#fdab52] to-[#fdab52] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                  {section.btn}
                </Link>
              <hr  className="mt-4"/>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default Proseries1;
