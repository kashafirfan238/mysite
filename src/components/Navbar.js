import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ products }) => {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const isActive = (pathName) => path === pathName;

  // Handle search suggestions
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const filteredSuggestions = products.filter((product) =>
        product.label.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (product) => {
    setSearchQuery(product.label);
    setSuggestions([]);
    navigate(`/products`);

  };

  // Handle form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const filteredProducts = products.filter((product) =>
      product.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchQuery("")
    navigate('/products', { state: { filteredProducts } });
    
  };

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
          <div className="relative hidden md:block">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                id="search-navbar"
                value={searchQuery}
                onChange={handleSearch}
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
              />
            </form>

            {/* Suggestions dropdown */}
            {suggestions.length > 0 && (
              <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                {suggestions.map((product) => (
                  <li
                    key={product.id}
                    className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSuggestionClick(product)}
                  >
                    {product.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto"
          id="navbar-search"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-[#f6ba32]">
            <li>
              <Link
                to="/"
                className={`block py-2 pl-3 pr-4 rounded text-2xl ${isActive('/') ? 'text-white' : 'text-black'}`}
                aria-current={isActive('/') ? 'page' : undefined}
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
              <Link
                to={"/products"}
                className={`block py-2 pl-3 pr-4 rounded text-2xl ${path.startsWith('/products') ? 'text-white' : 'text-black'}`}
              >
                Products
              </Link>
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
