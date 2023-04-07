import React from "react";
import PostCard from "../PostCard";

const PostsList = ({ posts }) => {
  return (
    <div className="container w-full md:w-4/5 lg:w-3/4 mx-auto mt-20 px-4">
      <h2 className="text-3xl font-bold mb-6">Make Something New!</h2>
      <div className="grid grid-cols-1 gap-8 place-items-center">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostsList;
