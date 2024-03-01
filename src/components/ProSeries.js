import React from "react";
import { useInView } from "react-intersection-observer";
// import hmi1 from "../Assets/hmi1";
// import meal from "../../images/meal.png";
// import music from "../../images/music.png";
// import solo from "../../images/solo.png";
// import profile from "../../images/profile.png";
// import workout from "../../images/workout.png";

// used in General component after cards

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
    image: HMI,
    title: "Simple integration",
    description:
      "Use the LocaleData gem to download translations directly into your Ruby on Rails projects using the provided command line interface. Just create a project and follow the step-by-step instructions.",
  },
  {
    image: HMI,
    title: "Easy collaboration",
    description:
      "All LocaleData projects are private. Each project can have multiple collaborators with different roles and access permissions. You determine who can see and edit your translations. Just add admins, developers, translators and configure their access rights.",
  },
  {
    image: HMI,
    title: "No more syntax errors",
    description:
      "LocaleData provides you easy import/export functions for your YAML files. Use a simple editor with many predefined languages to manage your locales. LocaleData also supports multiple translation types, such as simple text, plural forms, numbers, booleans, symbols, arrays, ...",
  },
  {
    image: HMI,
    title: "Bulk editing",
    description:
      "Do you need to change the path of many translation keys at once? No problem, just use the bulk editing feature and enjoy the results.",
  },
];

// used in General component after cards

const ProSeries = ({props}) => {
  return (
    <div className="bg-purple-600 overflow-hidden">
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
              <h3 className="font-bold mt-8 text-xl text-[#ffff] md:mt-0 sm:text-2xl">
                {section.title}
              </h3>
              <p className="sm:text-lg text-white mb-2 mt-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {section.description}
              </p>
              <hr />
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default ProSeries;