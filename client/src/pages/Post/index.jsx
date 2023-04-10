import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/NavBar";
import FullPost from "../../components/FullPost";
import { dummyPosts } from "../../constants/constants";

const Post = () => {
  const { id } = useParams();
  const post = dummyPosts.find((post) => post.id === id);

  if (!post) {
    return (
      <div className="bg-[#1f1f1f] text-white min-h-screen">
        <Navbar />
        <main className="max-w-4xl mx-auto py-20">
          <div>Post not found</div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-[#1f1f1f] text-white min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto py-20">
        <FullPost post={post} />
      </main>
    </div>
  );
};

export default Post;
