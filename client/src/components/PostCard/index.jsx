import React from "react";
import { reaction } from "../../assets";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { QUERY_RECIPES } from '../../utils/queries';

const PostCard = ({ recipe }) => {
  const { data, loading, error } = useQuery(QUERY_RECIPES);
  if (error) {
    console.error("Error executing the QUERY_RECIPES query:", error);
  }
  const recipeData = data?.getRecipe || [];
  console.log(13, recipeData)
  
  const { _id, name, imgUrl, instructions, ingredients, recipeAuthor,createdAt} = recipe;

  const getSnippet = (content) => {
    const maxLength = 100;
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "...";
    }
    return content;
  };

  const handleReactionClick = () => {
    "";
  };

  if (!recipe) {
    return <h3> No Recipes Yet</h3>;
  }

  return (
    <div className="max-w-4xl w-full mx-auto rounded-lg overflow-hidden shadow-lg shadow-black mb-8 border border-cyan-300">
      {imgUrl && (
        <img
          src={imgUrl}
          alt={name}
          className="w-full h-80 object-cover rounded-t-lg"
        />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-white text-xl mb-2 hover:text-[#23979d] transition-colors duration-300">
          <Link to={`/post/${_id}`}>{name}</Link>
        </div>
        <p className="text-gray-400 text-base">{getSnippet(instructions)}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
      
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #example-tag
        </span>
      </div>
      <div className="px-6 py-4 flex items-center">
        <button onClick={handleReactionClick}>
          <img src={reaction} alt="Reaction" className="h-[25px]" />
        </button>


        <div className="text-sm">
          <p className="text-white leading-none">{recipeAuthor}</p>
          <p className="text-gray-600">{createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
