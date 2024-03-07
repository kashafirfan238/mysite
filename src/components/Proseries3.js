import React from "react";
import { useInView } from "react-intersection-observer";
import vbox1 from "../Assets/vbox1.png";
import vbox2 from "../Assets/vbox2.png";
import { Link } from "react-router-dom";
// import HMI from '../Assets/HMI.png'
const AnimatedSection = ({ children, isLeft }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`text-center ${
        inView
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
    image: vbox1,
    title: "H Series",
    titledesc: "ig IIoT HMI, born specifically for the Internet of Things",

    description: [
      { line1: "Optional with 4G module and WIFI module" },
      { line2: ",3 Ethernet ports (standard)" },
      { line3: "Serial passthrough and WVPN passthrough supported" },
      { line4: "Maximum real-time monitoring points is 600" },
      { line5: "Maximum alarm data monitoring points is 300" },
      { line6: "Maximum historical data monitoring points is 100" },
      { line7: "Maximum days to save historical data is 180 days" },
      { line8: "Maximum historical data saved is 1 million" },
    ],

    btn: "Read more",
  },
  {
    image: vbox2,
    title: "E Series",
    titledesc: "",
    description: [
      { line1: "Optional 4G module" },
      { line2: "Edge computing and serial passthrough supported" },
      { line3: "Support data transmission with network failure" },
      { line4: "Maximum real-time monitoring points is 250" },
      { line5: "Maximum alarm data monitoring points is 100" },
    ],

    btn: "Read more",
  },
];

const Proseries3 = () => {
  return (
    <div className="bg-white overflow-hidden">
      {sectionsData.map((section, index) => (
        <AnimatedSection key={index} isLeft={index % 2 === 0}>
          <div
            className={`flex flex-wrap items-center mt-20 ${
              index % 2 === 1
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
              className={`w-full md:w-2/5 lg:w-1/2 px-4 ${
                index % 2 === 1
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
                <button  class="px-3 py-3 my-2 bg-gradient-to-r from-[#fdab52] to-[#fdab52] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                  {section.btn}
                </button>
              </>

              <hr />
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default Proseries3;
