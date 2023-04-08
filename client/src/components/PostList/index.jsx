import React from "react";
import PostCard from "../PostCard";
import SideBar from "../SideBar";
import { dummySavedPosts, potentialFriends } from "../../constants/constants";


const PostsList = ({ posts, savedPosts }) => {
  return (
    <div className="container w-full mx-auto mt-8 px-4">
      <h2 className="text-3xl text-left px-11 ml-11 text-white font-bold mb-6">
        Try Making A New Dish!
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full md:w-3/4 lg:w-3/5 px-4">
          <div className="grid grid-cols-1 gap-8 place-items-center">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
        <SideBar savedPosts={dummySavedPosts} friends={potentialFriends} />
      </div>
    </div>
  );
};

export default PostsList;

