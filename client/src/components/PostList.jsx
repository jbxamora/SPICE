import React from "react";
import PostCard from "./PostCard";

const PostsList = ({ posts = [] }) => {
  return (
    <div className="container w-full md:w-2/3 lg:w-1/2 mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-6">Posts</h2>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
