import React from "react";
import { logo } from "../../assets";

const Footer = () => {
  return (
    <footer className="bg-[#020617] absolute text-white mt-20">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <div className="text-2xl font-bold gradient-text">SPICE</div>
            <p className="text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              hendrerit mi metus, ac vestibulum tortor mollis ut.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:underline"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:underline"
                >
                  Recipes
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:underline"
                >
                  About
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Recipes</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:underline"
                >
                  Spaghetti Bolognese
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:underline"
                >
                  Beef Stew
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:underline"
                >
                  Chicken Curry
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:underline"
                >
                  Lasagna
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-gray-500 text-gray-100 py-2 px-3 mb-2 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 focus:outline-none"
              >
                Subscribe
              </button>
            </form>
            </div>
        </div>
        </div>
        
    </footer>
    );
};

export default Footer;