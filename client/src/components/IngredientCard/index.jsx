import React, { useState } from "react";

// IngredientsCard component receives an array of ingredients as a prop
const IngredientsCard = ({ ingredients }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [hideDropdown, setHideDropdown] = useState(false);

  // Function to hide the dropdown
  const handleHideDropdown = () => {
    setShowDropdown(false);
    setHideDropdown(false);
  };

  // Function to show the dropdown
  const handleShowDropdown = () => {
    setShowDropdown(true);
    setHideDropdown(true);
  };

  // Render the IngredientsCard component
  return (
    <div className="relative">
      <button
        onClick={showDropdown ? handleHideDropdown : handleShowDropdown}
        className={`text-white bg-transparent shadow-lg shadow-black border border-cyan-400 p-2 rounded mb-2 fixed ml-11 ${
          hideDropdown ? "hidden" : ""
        }`}
      >
        Ingredients
      </button>

      {showDropdown && (
        <div className="fixed z-10 bg-transparent border border-cyan-400 rounded-2xl shadow-lg shadow-black p-10 w-60 lg:w-80 ml-10">
          {/* Render the title */}
          <h2 className="text-xl text-white dark:text-white text-center font-bold mb-4">
            Ingredients
          </h2>
          {/* Render the list of ingredients */}
          <ul className="space-y-2">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="text-white dark:text-gray-200">
                {ingredient}
              </li>
            ))}
          </ul>
          {/* Render the close button */}
          <button
            onClick={handleHideDropdown}
            className="text-white bg-blue-600 p-2 rounded mt-4 w-full"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default IngredientsCard;