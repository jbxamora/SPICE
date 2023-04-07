import React from "react";

const PostCard = ({ post }) => {
  const { title, content, imageUrl } = post;

  const getSnippet = (content) => {
    const maxLength = 100;
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "...";
    }
    return content;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{getSnippet(content)}</p>
    </div>
  );
};

export default PostCard;
