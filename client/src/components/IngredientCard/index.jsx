import React, { useState } from "react";

const IngredientsCard = ({ ingredients }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [hideDropdown, setHideDropdown] = useState(false);

  const handleHideDropdown = () => {
    setShowDropdown(false);
  };

  const handleShowDropdown = () => {
    setShowDropdown(true);
    setHideDropdown(false);
  };

  return (
    <div className="relative">
      <button
        onClick={showDropdown ? handleHideDropdown : handleShowDropdown}
        className={`text-white bg-blue-600 p-2 rounded mb-2 fixed ml-11 ${
          hideDropdown ? "hidden" : ""
        }`}
      >
        Ingredients
      </button>

      {showDropdown && (
        <div className="fixed z-10 bg-white dark:bg-gray-800 border border-gray-900 rounded-2xl shadow-lg shadow-black p-10 w-60 lg:w-80 mt-2">
          <h2 className="text-xl text-gray-800 dark:text-white text-center font-bold mb-4">
            Ingredients
          </h2>
          <ul className="space-y-2">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-800 dark:text-gray-200">
                {ingredient}
              </li>
            ))}
          </ul>
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
