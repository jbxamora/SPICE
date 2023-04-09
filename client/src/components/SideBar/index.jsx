import React from "react";
import { potentialFriends } from "../../constants/constants";

const SideBar = ({ savedPosts }) => {
  return (
    <div className="hidden md:block sticky top-16 md:w-[500px] h-auto lg:w-[500px] px-4 ml-4">
      <h2 className="text-xl text-[#d7dade] font-bold mb-4">Saved Dishes</h2>
      <ul className="bg-gray-300 border border-gray-900 rounded-2xl shadow-2xl p-4 mb-8">
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

      <div className="hidden md:block top-16 mt-8">
        <h2 className="text-xl text-[#d7dade] font-bold mb-4">
          Potential Friends
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {potentialFriends.map((friend) => (
            <div
              key={friend.id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={friend.image}
                  alt={`${friend.name} image`}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {friend.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {friend.experience}
                </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add friend
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    Message
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
