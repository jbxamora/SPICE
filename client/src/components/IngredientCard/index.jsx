import React from "react";

const IngredientsCard = ({ ingredients }) => {
  return (
    <div
      className="sticky top-20 ml-4 bg-gray-800 p-4 rounded-md shadow-lg"
      style={{ minWidth: "200px" }}
    >
      <h2 className="text-xl text-[#d7dade] text-center font-bold mb-4">
        Ingredients
      </h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index} className="mb-2">
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsCard;
