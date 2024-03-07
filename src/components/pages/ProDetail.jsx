// import React from 'react';
// import { useParams } from 'react-router-dom';
// import HMI from '../../Assets/HMI.png';
// import img1 from '../../Assets/img1.jpg';
// import hmid from '../../Assets/hmid.jpg';

// const sectionsData = [
//   {
//     image:[{
//       hmid
//     },
//   {
//     hmid
//   }, {
//     hmid
//   }, {
//     hmid
//   },],
//     title: "PI3000ig Series",
//     titledesc: "ig IIoT HMI, born specifically for the Internet of Things",
//     description: [
//       { line1: "Equipment management" },
//       { line2: "Alarm push" },
//       { line3: "Remote Operation and maintenance" },
//       { line4: "Cloud SCADA" },
//     ],
//     btn: "Read more",
//   },
  
//         image :[{
//           hmid
//         },
//       {
//         hmid
//       }, {
//         hmid
//       }, {
//         hmid
//       },],
//     {
//     title: "PI3000i Series",
//     titledesc: "PI 3000i series  HMI.",
//     description: [
//       { line1: "1 Optional with 7 inch and 10.2 inch" },
//       { line2: "2 Optional Ethernet port" },
//       { line3: "3 Power consumption>8W" },
//     ],
//     btn: "Read more",
//   },
//   {
//     image: HMI,
//     title: "PI 3000ie Series",
//     titledesc: "Multi-core processor with super smooth and fast speed",
//     description: [
//       { line1: "Power on in 6 seconds" },
//       { line2: "Screen switching,300+ popular PLC brands&series protocols supported" },
//       { line3: "50+ screen parts supported" },
//       { line4: "LUA script supported" },
//     ],
//     btn: "Read more",
//   },
//   {
//     image: HMI,
//     title: "PI8000 Series",
//     titledesc: "PI 8000 series HMI.",
//     description: [
//       { line1: "32G SD card supported" },
//       { line2: "64G U disk storage supported" },
//       { line3: "Ethernet supported,CAN bus(optional)" },
//       { line4: "RS232 | RS485 |RS422 supported,LUA SCRIPT supported" },
//       { line5: "LUA SCRIPT supported" },
//     ],
//     btn: "Read more",
//   },
// ];

// const ProDetail = () => {
//   const { title } = useParams();
//   const matchTitle = sectionsData.find((item) => item.title === title);

//   if (!matchTitle) {
//     alert("No Details to Show");
//     return null; // or return some default content or redirect to a 404 page
//   }

//   return (
//     <>
//         <div><img className=" " src={img1} alt=""/></div>
//       <div className='flex mt-12 justify-start mx-5 gap-12'>
// <button className='border border-black bg-gray-300 text-black'>
// <ul class="flex flex-col gap-2 max-w-[280px] mx-auto mt-2">
// <li>
//         <details class="group">

//             <summary
//                 class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">

//                 <span class="flex gap-2">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//                         stroke="currentColor" class="w-6 h-6">
//                         <path stroke-linecap="round" stroke-linejoin="round"
//                             d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                     </svg>

//                     <span>
//                         PI3000ig Series
//                     </span>
//                 </span>
//                 <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
//                     width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//                     <path fill-rule="evenodd"
//                         d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
//                     </path>
//                 </svg>
//             </summary>

//             <article class="px-4 pb-4">
//                 <ul class="flex flex-col gap-1 pl-2">
//                     <li><a href=""> PI3000i Series</a></li>
//                     <li><a href=""> PI3000ie Series</a></li>
//                     <li><a href=""> PI3000ig Series</a></li>
//                     <li><a href=""> PI8000 Series</a></li>
//                 </ul>
//             </article>

//         </details>
//     </li>
//     </ul>

//   </button>
//   <button className='border border-black bg-gray-300 text-black'>
// <ul class="flex flex-col gap-2 max-w-[280px] mx-auto mt-2">
// <li>
//         <details class="group">

//             <summary
//                 class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">

//                 <span class="flex gap-2">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//                         stroke="currentColor" class="w-6 h-6">
//                         <path stroke-linecap="round" stroke-linejoin="round"
//                             d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                     </svg>

//                     <span>
//                       Screen size
//                     </span>
//                 </span>
//                 <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
//                     width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//                     <path fill-rule="evenodd"
//                         d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
//                     </path>
//                 </svg>
//             </summary>

//             <article class="px-4 pb-4">
//                 <ul class="flex flex-col gap-1 pl-2">
//                     <li><a href=""> 3.5 inch</a></li>
//                     <li><a href="">4.3 inch </a></li>
//                     <li><a href=""> 7 inch</a></li>
//                     <li><a href=""> 10.2 inch</a></li>
//                     <li><a href=""> 10.4 inch</a></li>
//                     <li><a href=""> 15 inch</a></li>
//                 </ul>
//             </article>

//         </details>
//     </li>
//     </ul>

//   </button>
//   <button className='border border-black bg-gray-300 text-black'>
// <ul class="flex flex-col gap-2 max-w-[280px] mx-auto mt-2">
// <li>
//         <details class="group">

//             <summary
//                 class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">

//                 <span class="flex gap-2">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//                         stroke="currentColor" class="w-6 h-6">
//                         <path stroke-linecap="round" stroke-linejoin="round"
//                             d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                     </svg>

//                     <span>
//                        Ethernet
//                     </span>
//                 </span>
//                 <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
//                     width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//                     <path fill-rule="evenodd"
//                         d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
//                     </path>
//                 </svg>
//             </summary>

//             <article class="px-4 pb-4">
//                 <ul class="flex flex-col gap-1 pl-2">
//                     <li><a href=""> Yes</a></li>
//                     <li><a href=""> No</a></li>
//                     <li><a href=""> Optional</a></li>
                   
//                 </ul>
//             </article>

//         </details>
//     </li>
//     </ul>

//   </button>
//       </div>
//       <section id="Projects"
//     class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

//       <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//         <a href="#">
//             <img src={hmid}
//                     alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
//             <div class="px-4 py-3 w-72">
//                 <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
//                 <p class="text-lg font-bold text-black truncate block capitalize">PI3070ig HMI</p>
//                 <div class="flex items-center">
                   
                    
//                     <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
//                             fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
//                             <path fill-rule="evenodd"
//                                 d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
//                             <path
//                                 d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
//                         </svg></div>
//                 </div>
//             </div>
//         </a>
//     </div>
//     <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//         <a href="#">
//             <img src={hmid}
//                     alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
//             <div class="px-4 py-3 w-72">
//                 <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
//                 <p class="text-lg font-bold text-black truncate block capitalize">PI3102ig HMI</p>
//                 <div class="flex items-center">
                    
//                     <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
//                             fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
//                             <path fill-rule="evenodd"
//                                 d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
//                             <path
//                                 d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
//                         </svg></div>
//                 </div>
//             </div>
//         </a>
//     </div>
//     <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//         <a href="#">
//             <img src={hmid}
//                     alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
//             <div class="px-4 py-3 w-72">
//                 <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
//                 <p class="text-lg font-bold text-black truncate block capitalize">PI3070ig-O</p>
//                 <div class="flex items-center">
                   
//                     <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
//                             fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
//                             <path fill-rule="evenodd"
//                                 d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
//                             <path
//                                 d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
//                         </svg></div>
//                 </div>
//             </div>
//         </a>
//     </div>
//     <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//         <a href="#">
//             <img src={hmid}
//                     alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
//             <div class="px-4 py-3 w-72">
//                 <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
//                 <p class="text-lg font-bold text-black truncate block capitalize">PI3102ig-O HMI</p>
//                 <div class="flex items-center">
                    
//                     <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
//                             fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
//                             <path fill-rule="evenodd"
//                                 d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
//                             <path
//                                 d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
//                         </svg></div>
//                 </div>
//             </div>
//         </a>
//     </div>
//     </section>
//     </>
//   );
// };

// export default ProDetail;

import React from 'react';
import { useParams } from 'react-router-dom';
// import HMI2 from '../../Assets/HMI2.png';
// import HMI3 from '../../Assets/HMI3.png';
// import HMI from '../../Assets/HMI.png';
import img1 from '../../Assets/img1.jpg';
import hmid from '../../Assets/hmid.jpg';


const sectionsData = [
  {
    images: [hmid, hmid, hmid],
    title: "PI3000ig Series",
    titledesc: "ig IIoT HMI, born specifically for the Internet of Things",
    description: [
      { line1: "Equipment management" },
      { line2: "Alarm push" },
      { line3: "Remote Operation and maintenance" },
      { line4: "Cloud SCADA" },
    ],
    btn: "Read more",
  },
  // ... (other objects with multiple images)
];

const ProDetail = () => {
  const { title } = useParams();
  const matchTitle = sectionsData.find((item) => item.title === title);

  if (!matchTitle) {
    alert("No Details to Show");
    return null; // or return some default content or redirect to a 404 page
  }

  const [firstImage, secondImage, thirdImage] = matchTitle.images;

  return (
   
    <div >
       <div><img className="   " src={img1} alt=""/></div>
{/* <div class="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg group">
    <svg class="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
        viewBox="0 0 375 283" fill="none" style="opacity: 0.1;">
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
    </svg>
    <div class="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;">
        </div>
        <img class="relative w-40" src={hmid} alt=""/>
    </div>
    <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 -mb-1">Indoor</span>
        <div class="flex justify-between">
            <span class="block font-semibold text-xl">Peace Lily</span>
            <span class="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
        </div>
    </div>
</div> */}

      <h2>{matchTitle.title}</h2>
      <div className='flex flex-wrap w-full items-center text-center justify-center'>
      <div class="w-full p-4 md:w-1/2 lg:w-1/3">
            <div class="flex flex-col rounded border-2 border-gray-200">
  <img src={firstImage} className='h-100 w-auto' alt={`${matchTitle.title} Image 1`} />
  </div>
  </div>
  <div class="w-full p-4 md:w-1/2 lg:w-1/3">
            <div class="flex flex-col rounded border-2 border-gray-200">
  <img src={secondImage} className='h-100 w-auto' alt={`${matchTitle.title} Image 2`} />
  </div>
  </div>
      <div class="w-full p-4 md:w-1/2 lg:w-1/3">
      <div class="flex flex-col rounded border-2 border-gray-200">

  <img src={thirdImage} className='h-100 w-auto' alt={`${matchTitle.title} Image 3`} />
</div>
</div>
  </div>

      <p>{matchTitle.titledesc}</p>
      <ul>
        {matchTitle.description.map((line, lineIndex) => (
          <li key={lineIndex}>{Object.values(line)[0]}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProDetail;

