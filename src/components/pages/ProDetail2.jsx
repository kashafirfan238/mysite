import React from "react";
import img1 from "../../Assets/img1.jpg";
import plcd from "../../Assets/plcd.jpg";
import plcd1 from "../../Assets/plcd1.jpg";
import plcd2 from "../../Assets/plcd2.jpg";
import plcd3 from "../../Assets/plcd3.jpg";
import plcd4 from "../../Assets/plcd4.jpg";
import plcd5 from "../../Assets/plcd5.jpg";
import plcd6 from "../../Assets/plcd6.jpg";
import plcd7 from "../../Assets/plcd7.jpg";
import plcd8 from "../../Assets/plcd8.jpg";
import plcd9 from "../../Assets/plcd9.jpg";
import plcd10 from "../../Assets/plcd10.jpg";
import plcd11 from "../../Assets/plcd11.jpg";
import plcd12 from "../../Assets/plcd12.jpg";
import plcd13 from "../../Assets/plcd13.jpg";
import plcd14 from "../../Assets/plcd14.jpg";
import plcd15 from "../../Assets/plcd15.jpg";
import plcd16 from "../../Assets/plcd16.jpg";
import plcd17 from "../../Assets/plcd17.jpg";
import plcd18 from "../../Assets/plcd18.jpg";
import plcd19 from "../../Assets/plcd19.jpg";
import { useParams } from 'react-router-dom';

const sectionsData = [
  // Category 1

  {
    images: plcd,
    title: "PI3000ig",
    btn: "EHTERCAT LX6V 0808MT PLC",
  },
  {
    images: plcd1,
    title: "PI3000ig",
    btn: "Codesys LX6C-0808MT PLC",
  },
  {
    images: plcd2,
    title: "PI3000ig",
    btn: "LX6S 0808MT PLC",
  },

  // Category 2

  {
    images: plcd3,
     title: "LX5V",

    btn: "LXV5 1412MT PLC",
  },
  {
    images: plcd4,
    title: "LX5V",

    btn: "LXV5 1616MT PLC",
  },
  {
    images: plcd5,
     title: "LX5V",

    btn: "LXV5 2424MT/3624MT PLC",
  },
  {
    images: plcd6,
    title: "LX5V",
    btn: "LXV5 Ethernet Series",
  },
 
  // Category 3
  {
    images: plcd7,
    title: "LX5S",
    btn: "LX5S 0806M/ 1028M",
  },
  {
    images: plcd8,
    title: "LX5S",
    btn: "LX5S 1412M",
  },
  {
    images: plcd9,
    title: "LX5S",
    btn: "LX5S 1616M/2416M",
  },
  {
    images: plcd10,
    title: "LX5S",
    btn: "LX5S 2424M/3624M",
  },
  {
    images: plcd11,
    title: "LX5S",
    btn: "LX5S Ethernet Series PLC",
  },
  // Category 4
  {
    images: plcd12,
    title: "LXEV",
    btn: "LX3V 0806M/1208M PLC",
  },
  {
    images: plcd13,
    title: "LXEV",
    btn: "LX3V 1212M/1412M PLC",
  },
  {
    images: plcd14,
    title: "LXEV",
    btn: "LX3V 1616M/2416M PLC",
  },
  {
    images: plcd15,
    title: "LXEV",
    btn: "LX3V 2424M/3624M PLC",
  },
  {
    images: plcd16,
    title: "LXEV",

    btn: "LX3V 0806M/1208M PLC",
  },
  {
    images: plcd17,
    title: "LXEV",
    btn: "LX3VP 1212M/1412M PLC",
  },
  {
    images: plcd18,
    title: "LXEV",
    btn: "LX3VP 1616M/2416M PLC",
  },
  {
    images: plcd19,
    title: "LXEV",

    btn: "LX3VP 2424M/3624M PLC",
  },
   // Category 5
   {
    images: plcd12,
    title: "Expansion Module",

    btn: "LX3V 0806M/1208M PLC",
  },
  {
    images: plcd13,
    title: "Expansion Module",

    btn: "LX3V 1212M/1412M PLC",
  },
  {
    images: plcd14,
    title: "Expansion Module",
    btn: "LX3V 1616M/2416M PLC",
  },
  
];

const ProDetail2 = () => {
  const { title } = useParams();
  const matchedSections = sectionsData.filter((item) => item.title === title);
  console.log("pefrdyt===>", matchedSections);
  if (!matchedSections.length) {
    alert("No Details to Show");
    return null; // or return some default content or redirect to a 404 page
  }
  return (
    <>
      <div>
        <img className="" src={img1} alt="" />
      </div>
      <div className="flex mt-12 justify-start mx-5 gap-12">
        <div>
          <button className="border border-black bg-gray-300 text-black">
            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto mt-2">
              <li>
                {" "}
                <details class="group">
                  <summary class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>

                      <span>{matchedSections[0].title}</span>
                    </span>
                    <svg
                      class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                  </summary>

                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-1 pl-2">
                      <li>
                        <a href=""> LX6V & LX6S & LX6C</a>
                      </li>
                      <li>
                        <a href=""> LX5V</a>
                      </li>
                      <li>
                        <a href=""> LX5S</a>
                      </li>
                      <li>
                        <a href=""> LX3V</a>
                      </li>
                      <li>
                        <a href=""> LX3V Expansion module</a>
                      </li>
                      <li>
                        <a href=""> LX6V Expansion module</a>
                      </li>
                      <li>
                        <a href=""> LX3V BD Module</a>
                      </li>
                      <li>
                        <a href=""> LX5V BD Module</a>
                      </li>
                    </ul>
                  </article>
                </details>{" "}
              </li>
            </ul>
          </button>
        </div>
        <div>
          <button className="border border-black bg-gray-300 text-black">
            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto mt-2">
              <li>
                <details class="group">
                  <summary class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>I/O</span>
                    </span>
                    <svg
                      class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                  </summary>
                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-1 pl-2">
                      <li>
                        <a href=""> 14-26</a>
                      </li>
                      <li>
                        <a href="">32-60 </a>
                      </li>
                      {/* <li>
                        <a href=""> 7 inch</a>
                      </li>
                      <li>
                        <a href=""> 10.2 inch</a>
                      </li>
                      <li>
                        <a href=""> 10.4 inch</a>
                      </li>
                      <li>
                        <a href=""> 15 inch</a>
                      </li> */}
                    </ul>
                  </article>
                </details>
              </li>
            </ul>
          </button>
        </div>
        <div>
          <button className="border border-black bg-gray-300 text-black">
            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto mt-2">
              <li>
                <details class="group">
                  <summary class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>

                      <span>Output Type</span>
                    </span>
                    <svg
                      class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      >
                        {" "}
                      </path>
                    </svg>{" "}
                  </summary>

                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-1 pl-2">
                      <li>
                        <a href=""> Transistor</a>
                      </li>
                      <li>
                        <a href=""> Relay</a>
                      </li>
                      <li>
                        <a href=""> Mix</a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>
          </button>
        </div>
        <div>
          <button className="border border-black bg-gray-300 text-black">
            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto mt-2">
              <li>
                <details class="group">
                  <summary class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>

                      <span> Pulse Output </span>
                    </span>
                    <svg
                      class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      >
                        {" "}
                      </path>
                    </svg>{" "}
                  </summary>

                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-1 pl-2">
                      <li>
                        <a href=""> 8 channel</a>
                      </li>
                      <li>
                        <a href="">4 channel </a>
                      </li>
                      <li>
                        <a href=""> 2 channel</a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>
          </button>
        </div>
      </div>

      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {matchedSections.map((section, index) => (
          <div key={index}>
            <a href="#">
              <img
                src={section.images}
                alt="Product"
                className="h-80 w-96 space-x-2 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72 ml-12 hover:bg-[#fdab52]">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  {section.title}
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {section.btn}
                </p>
                <div className="flex items-center"></div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProDetail2;
