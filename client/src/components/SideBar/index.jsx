import React from "react";

const SideBar = ({ savedPosts }) => {
  return (
    <div className="hidden md:block sticky top-16 md:w-[500px] h-[520px] lg:w-[500px] px-4 ml-4">
      <h2 className="text-xl text-white font-bold mb-4">Saved Dishes</h2>
      <ul className="bg-transparent border rounded-lg shadow-lg p-4">
        {savedPosts.map((post) => (
          <li key={post.id} className="mb-2">
            <a
              href={`/posts/${post.id}`}
              className="text-blue-600 hover:text-blue-800"
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
