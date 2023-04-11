import React, { useState, useEffect } from "react";
import { logo } from "../../assets";
import { Link, useLocation } from "react-router-dom";
import { searchPlaceholders } from "../../constants/constants";
import Auth from "../../utils/auth";

const Navbar = () => {
  // State to manage the mobile navigation menu
  const [isOpen, setIsOpen] = useState(false);

  // State to manage the search bar placeholder
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  // Access the current location to conditionally render components
  const location = useLocation();

  useEffect(() => {
    // Rotate search bar placeholder text every 15 seconds
    const interval = setInterval(() => {
      setPlaceholderIndex(
        (prevIndex) => (prevIndex + 1) % searchPlaceholders.length
      );
    }, 15000); // 15 seconds

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  // Function to conditionally render the authentication buttons
  const renderAuthButton = () => {
    if (Auth.loggedIn()) {
      return (
        <button
          onClick={Auth.logout}
          className="text-gray-300 hover:text-white hover:bg-gray-700 font-thefont block px-3 py-2 rounded-md text-base font-medium"
        >
          Logout
        </button>
      );
    } else {
      return location.pathname === "/signup" ? (
        <Link
          to="/signin"
          className="text-gray-300 hover:text-white hover:bg-gray-700 font-thefont block px-3 py-2 rounded-md text-base font-medium"
        >
          Log In
        </Link>
      ) : (
        <Link
          to="/signup"
          className="text-gray-300 hover:text-white hover:bg-gray-700 font-thefont block px-3 py-2 rounded-md text-base font-medium"
        >
          Sign Up
        </Link>
      );
    }
  };

  // Function to conditionally render the search bar
  const renderSearchBar = () => {
    if (location.pathname === "/home") {
      return (
        <div className="search-container hidden lg:block mr-[420px]">
          <input
            type="search"
            placeholder={searchPlaceholders[placeholderIndex]}
            className="search-input"
          />
        </div>
      );
    }
  };

  // Function to handle the closing of mobile navigation menu when a link is clicked
  const handleMobileNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#020617] text-white fixed w-full top-0 left-0 z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
            <Link
              to="/"
              className="text-3xl font-thefont gradient-text cursor-pointer ml-4"
            >
              SPICE
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            {renderSearchBar()}

            <div className="flex items-baseline space-x-4 ml-4">
              <Link
                to="/home"
                className="text-gray-300 hover:text-white px-4 py-2 rounded text-base font-thefont font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/create"
                className="text-gray-300 hover:text-white px-4 py-2 rounded text-base font-thefont font-medium transition-colors duration-200"
              >
                Create
              </Link>
              {renderAuthButton()}
            </div>
          </div>
          <div className="-mr-2  flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex  items-center justify-center p-2 rounded-md hamburger-btn ${
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
            to="/home"
            onClick={handleMobileNavLinkClick}
            className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/create"
            onClick={handleMobileNavLinkClick}
            className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Create
          </Link>
          <div onClick={handleMobileNavLinkClick}>{renderAuthButton()}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;