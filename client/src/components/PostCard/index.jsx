import React from "react";
import { reaction } from "../../assets";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const { title, content, imageUrl, author, date } = post;

  // Truncate the content if it's too long and add '...' at the end
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

  // Render the PostCard component
  return (
    <div className="max-w-4xl w-full mx-auto rounded-lg overflow-hidden shadow-lg shadow-black mb-8 border border-cyan-300">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-80 object-cover rounded-t-lg"
        />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-white text-xl mb-2 hover:text-[#23979d] transition-colors duration-300">
          <Link to={`/post/${post.id}`}>{title}</Link>
        </div>
        <p className="text-gray-400 text-base">{getSnippet(content)}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {/* Add any relevant tags here */}
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #example-tag
        </span>
      </div>
      <div className="px-6 py-4 flex items-center">
        <button onClick={handleReactionClick}>
          <img src={reaction} alt="Reaction" className="h-[25px]" />
        </button>

        <img
          className="w-10 h-10 rounded-full mr-4"
          src={author.avatarUrl}
          alt={`Avatar of ${author.name}`}
        />
        <div className="text-sm">
          <p className="text-white leading-none">{author.name}</p>
          <p className="text-gray-600">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
