import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const isActive = (pathName) => path === pathName;

  return (
    <nav style={{ backgroundColor: '#f6ba32' }} className="border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img
            src="https://alshamstrader.pk/wp-content/uploads/2022/10/Al-Shamas-Traders-Logo-White-e1677957102725.png"
            className="h-[50px]"
            alt="Logo"
          />
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto"
          id="navbar-search"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-[#f6ba32]">
            <li>
              <Link
                to="/home"
                className={`block py-2 pl-3 pr-4 rounded text-2xl ${isActive('/home') ? 'text-white' : 'text-black'}`}
                aria-current={isActive('/home') ? 'page' : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 pl-3 pr-4 rounded text-2xl ${isActive('/about') ? 'text-white' : 'text-black'}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 pl-3 pr-4 rounded text-2xl ${isActive('/contact') ? 'text-white' : 'text-black'}`}
              >
                Contact
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className={`block py-2 pl-3 pr-4 rounded text-2xl ${path.startsWith('/products') ? 'text-white' : 'text-black'}`}
              >
                Products
              </button>
              {isProductsOpen && (
                <ul className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                  <li>
                    <Link
                      to="/products/hmi"
                      className={`block py-2 px-4 text-sm ${isActive('/products/hmi') ? 'bg-gray-200 text-black' : 'text-gray-900'}`}
                    >
                      HMI
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/plc"
                      className={`block py-2 px-4 text-sm ${isActive('/products/plc') ? 'bg-gray-200 text-black' : 'text-gray-900'}`}
                    >
                      PLC
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/servo"
                      className={`block py-2 px-4 text-sm ${isActive('/products/servo') ? 'bg-gray-200 text-black' : 'text-gray-900'}`}
                    >
                      Servo
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/vbox"
                      className={`block py-2 px-4 text-sm ${isActive('/products/vbox') ? 'bg-gray-200 text-black' : 'text-gray-900'}`}
                    >
                      V-box
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
