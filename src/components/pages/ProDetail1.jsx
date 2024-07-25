import React from "react";
import { useParams } from "react-router-dom";
import img1 from "../../Assets/img1.jpg";
import svd from "../../Assets/svd.jpg";
import svdd from "../../Assets/svdd.jpg";
import svd1 from "../../Assets/svd1.jpg";
import svd12 from "../../Assets/svd12.jpg";
import svd13 from "../../Assets/svd13.jpg";
import svd21 from "../../Assets/svd21.jpg";
import svd22 from "../../Assets/svd22.jpg";
import svd23 from "../../Assets/svd23.jpg";


const sectionData = [
  // Category HMI 1S
  {
    images: svd,
    title: "VD3E Series",

    btn: "VD3E Servo Drive (0.4-0.75KW)",
  },
  {
    images: svdd,
    title: "VD3E",

    btn: "VD3E Servo Drive（1.0-3.8KW）",
  },

  // Category 2

  {
    images: svd1,
    title: "VD2",

    btn: "VD2 Servo Drive (0.4-0.75KW) ",
  },
  {
    images: svd12,
    title: "VD2",

    btn: "VD2 Servo Drive（1.0-3.8KW)",
  },
  {
    images: svd13,
    title: "VD2",

    btn: "VD2 Servo Drive (2KW-5.5KW)",
  },

  // Category 3
  {
    images: svd13,
    title: "VD2F",

    btn: "VD2F Servo Driver(0.1kW -0.75KW)",
  },

  // Category 4
  {
    images: svd21,
    title: "Motor",

    btn: "60 Series Motor Specification",
  },
  {
    images: svd22,
    title: "Motor",

    btn: "80 Series Motor Specification",
  },
  {
    images: svd23,
    title: "Motor",

    btn: "110 Series Motor Specification",
  },
  {
    images: svd23,
    title: "Motor",

    btn: "130 Series Motor Specification",
  },
];

const ProDetail1 = () => {
  const { title } = useParams();
  const matchedSections = sectionData.filter((item) => item.title === title);
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
                        <a href="">VD3E </a>
                      </li>
                      <li>
                        <a href=""> VD2</a>
                      </li>
                      <li>
                        <a href=""> VD2F</a>
                      </li>
                      <li>
                        <a href=""> Motor</a>
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
                      <span>Supply Voltage</span>
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
                        <a href="">220v</a>
                      </li>
                      <li>
                        <a href="">380v</a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>
          </button>
        </div>
        <div>
          {/* <button className="border border-black bg-gray-300 text-black">
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

                      <span>Ethernet</span>
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
                        <a href=""> Yes</a>
                      </li>
                      <li>
                        <a href=""> No</a>
                      </li>
                      <li>
                        <a href=""> Optional</a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>
          </button> */}
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

export default ProDetail1;
