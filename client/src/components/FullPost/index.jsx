import React from "react";

// FullPost component receives a recipe object as a prop
const FullPost = ({ recipe }) => {
  const { name, imgUrl, instructions, recipeAuthor, createdAt } = recipe || {};

  // Render the FullPost component
  return (
    <div className="max-w-4xl w-full mx-auto rounded-lg overflow-hidden shadow-lg shadow-black mb-8 border border-cyan-300">
      {imgUrl && (
        // Render the image if imageUrl is available
        <img
          src={imgUrl}
          alt={name}
          className="w-full h-80 object-cover rounded-t-lg"
        />
      )}
      <div className="px-6 py-4">
        {/* Render the post title */}
        <div className="font-bold text-white text-2xl mb-2">{name}</div>
        {/* Render the post content */}
        <p className="text-gray-400 text-lg">{instructions}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {/* Add any relevant tags here */}
         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #newcook
        </span>
      </div>
       {/* <div className="px-6 py-4 flex items-center"> */}
        {/* Render the reaction button */}
        {/* <button onClick={handleReactionClick}>
          <img src={reaction} alt="Reaction" className="h-[25px]" />
        </button> */}

        {/* Render the author's avatar */}
        {/* <img src={recipeAuthor?.avatarUrl} alt={`${recipeAuthor.name}'s avatar`} /> */}
        
        {/* Render the author's name and the post date */}
        <div className="text-sm">
          <p className="text-white leading-none">{recipeAuthor}</p>
          <p className="text-gray-600">{createdAt}</p>
          
        </div>
      {/* </div> */}
    </div>
  );
};

export default FullPost;
