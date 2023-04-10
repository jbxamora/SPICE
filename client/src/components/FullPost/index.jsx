import React from "react";
import { reaction } from "../../assets";
import IngredientsCard from "../IngredientCard";

// FullPost component receives a post object as a prop
const FullPost = ({ post }) => {
  const { title, content, imageUrl, author, date } = post;

  // Dummy function for handling the reaction button click
  const handleReactionClick = () => {};

  // Render the FullPost component
  return (
    <div className="max-w-4xl w-full mx-auto rounded-lg overflow-hidden shadow-lg shadow-black mb-8 border border-cyan-300">
      {imageUrl && (
        // Render the image if imageUrl is available
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-80 object-cover rounded-t-lg"
        />
      )}
      <div className="px-6 py-4">
        {/* Render the post title */}
        <div className="font-bold text-white text-2xl mb-2">{title}</div>
        {/* Render the post content */}
        <p className="text-gray-400 text-lg">{content}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {/* Add any relevant tags here */}
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #example-tag
        </span>
      </div>
      <div className="px-6 py-4 flex items-center">
        {/* Render the reaction button */}
        <button onClick={handleReactionClick}>
          <img src={reaction} alt="Reaction" className="h-[25px]" />
        </button>

        {/* Render the author's avatar */}
        <img
          className="w-10 h-10 rounded-full mr-4"
          src={author.avatarUrl}
          alt={`Avatar of ${author.name}`}
        />
        {/* Render the author's name and the post date */}
        <div className="text-sm">
          <p className="text-white leading-none">{author.name}</p>
          <p className="text-gray-600">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default FullPost;