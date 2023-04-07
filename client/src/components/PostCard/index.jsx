import React from "react";

const PostCard = ({ post }) => {
  const { title, content, imageUrl, author, date } = post;

  const getSnippet = (content) => {
    const maxLength = 100;
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "...";
    }
    return content;
  };

  return (
    <div className="max-w-4xl w-full mx-auto rounded overflow-hidden shadow-lg mb-8 border border-cyan-300">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-80 object-cover rounded-t-lg"
        />
      )}{" "}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{getSnippet(content)}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {/* Add any relevant tags here */}
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #example-tag
        </span>
      </div>
      <div className="px-6 py-4 flex items-center">
        {/* Uncomment the following line and replace with the actual author's image URL */}
        {/* <img
          className="w-10 h-10 rounded-full mr-4"
          src={author.avatarUrl}
          alt={`Avatar of ${author.name}`}
        /> */}
        <div className="text-sm">
          <p className="text-gray-900 leading-none">Author Name</p>
          <p className="text-gray-600">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
