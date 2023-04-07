import React, { useState } from "react";
import { logo } from "../../assets";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { searchPlaceholders } from "../../constants/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setPlaceholderIndex(
      (prevIndex) => (prevIndex + 1) % searchPlaceholders.length
    );
  }, 15000); // 15 seconds

  return () => clearInterval(interval);
}, []);

  return (
    <nav className="bg-[#020617] text-white fixed w-full top-0 left-0 z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <Link 
            to='/about'
            className="text-2xl font-bold gradient-text cursor-pointer" >SPICE</Link>
          </div>
          <div className="hidden md:flex items-center">
            <div className="search-container pr-[553px] ">
              <input
                type="search"
                placeholder={searchPlaceholders[placeholderIndex]}
                className="search-input"
              />
            </div>

            <div className="flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/create"
                className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Create
              </Link>
              <Link
                to="/signup"
                className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md hamburger-btn ${
                isOpen ? "open" : ""
              } focus:outline-none`}
            >
              <i className={`fas fa-${isOpen ? "times" : "bars"}`} />
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/create"
            className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Create
          </Link>
          <Link
            to="/signup"
            className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
