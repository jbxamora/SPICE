import React, { useState, useEffect } from "react";
import { logo } from "../../assets";
import { Link, useLocation } from "react-router-dom";
import { searchPlaceholders } from "../../constants/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex(
        (prevIndex) => (prevIndex + 1) % searchPlaceholders.length
      );
    }, 15000); // 15 seconds

    return () => clearInterval(interval);
  }, []);

  // Conditional Render of Sign IN/UP Buttons
  const renderAuthButton = () => {
    // replace this with the actual authentication state.
    const isLoggedIn = false;

    if (isLoggedIn) {
      return (
        <span className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
          User Name
        </span>
      );
    } else {
      return location.pathname === "/signup" ? (
        <Link
          to="/signin"
          className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
        >
          Log In
        </Link>
      ) : (
        <Link
          to="/signup"
          className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
        >
          Sign Up
        </Link>
      );
    }
  };

  // Conditional Render of SearchBar
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

  const handleMobileNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#020617] text-white fixed w-full top-0 left-0 z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <Link
              to="/"
              className="text-2xl font-bold gradient-text cursor-pointer ml-4"
            >
              SPICE
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            {renderSearchBar()}

            <div className="flex items-baseline space-x-4 ml-4">
              <Link
                to="/home"
                className="text-gray-300 hover:text-white px-4 py-2 rounded text-base font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/create"
                className="text-gray-300 hover:text-white px-4 py-2 rounded text-base font-medium transition-colors duration-200"
              >
                Create
              </Link>
              {renderAuthButton()}
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
