import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import plcd from "../../src/Assets/plcd.jpg";
import plcd1 from "../../src/Assets/plcd1.jpg";
import plcd2 from "../../src/Assets/plcd2.jpg";
import plcd3 from "../../src/Assets/plcd3.jpg";
import plcd4 from "../../src/Assets/plcd4.jpg";
import plcd5 from "../../src/Assets/plcd5.jpg";
import plcd6 from "../../src/Assets/plcd6.jpg";
import plcd7 from "../../src/Assets/plcd7.jpg";
import plcd8 from "../../src/Assets/plcd8.jpg";
import plcd9 from "../../src/Assets/plcd9.jpg";
import plcd10 from "../../src/Assets/plcd10.jpg";
import plcd11 from "../../src/Assets/plcd11.jpg";
import plcd12 from "../../src/Assets/plcd12.jpg";
import plcd13 from "../../src/Assets/plcd13.jpg";
import plcd14 from "../../src/Assets/plcd14.jpg";
import plcd15 from "../../src/Assets/plcd15.jpg";
import plcd16 from "../../src/Assets/plcd16.jpg";
import plcd17 from "../../src/Assets/plcd17.jpg";
import plcd18 from "../../src/Assets/plcd18.jpg";
import plcd19 from "../../src/Assets/plcd19.jpg";
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
    title: "HMI",

    btn: "LX3V 0806M/1208M PLC",
  },
  {
    images: plcd17,
    title: "HMI",
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

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const [searchTerm, setSearchTerm]=useState("");
  const [filterData, setFilterData]=useState([]);
  
  const handleSearch=(e)=>{
    const value =e.target.value.toLowerCase();
    setSearchTerm(value);
    if(value===""){
      setSearchTerm('')
    }else{
      const filtered=sectionsData.filter((item)=>item.title.toLowerCase().includes(value)
    )
      setFilterData(filtered)
    }
  }
  

  return (
    
    
<>

      

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#" class="flex items-center">
      <img src="https://alshamstrader.pk/wp-content/uploads/2022/10/Al-Shamas-Traders-Logo-White-e1677957102725.png" class=" h-[50px]
     "  alt="Flowbite Logo" />
      {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Diouma</span> */}
  </a>
  <div class="flex md:order-2">
    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      <span class="sr-only">Search</span>
    </button>
    <div class="relative hidden md:block">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search icon</span>
      </div>
      <input type="text" value={searchTerm} onChange={handleSearch} id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
      <div className='z-50 absolute bg-gray-700 border border-1 text-white'>
     {searchTerm && filterData.length > 0 && (
        <ul className='z-50 absolute bg-gray-600 p-4 overflow-y-auto max-h-48'>
          {filterData.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
     </div>
    </div>
   
    <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div class="relative mt-3 md:hidden">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
      </div>
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-[#fdab52] md:p-0 md:dark:text-blue-500 text-2xl" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#fdab52] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-2xl">About</a>
        </li>
        <li>
          <Link to="/contact" href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#fdab52] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-2xl">Contact</Link>
        </li>
        <li>
          <Link to="/products" href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#fdab52] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-2xl">Products</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  

</>
  

  )
  }
export default Navbar