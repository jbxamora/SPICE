import React from "react";

const SideBar = ({ savedPosts }) => {
  return (
    <div className="hidden md:block sticky top-16 md:w-[500px] h-[520px] lg:w-[500px] px-4 ml-4">
      <h2 className="text-xl text-[#d7dade] font-bold mb-4">Saved Dishes</h2>
      <ul className="bg-gray-300 border border-gray-900 rounded-2xl shadow-2xl p-4">
        {savedPosts.map((post) => (
          <li key={post.id} className="mb-2">
            <a
              href={`/posts/${post.id}`}
              className="text-[#002D74] hover:text-[#234F9D] transition-colors duration-300"
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
