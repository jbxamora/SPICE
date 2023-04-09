import React from "react";
import Navbar from "../../components/NavBar"
import Footer from "../../components/Footer";
import PostCard from "../../components/PostCard";

const Post = () => {
  const post = {
    title: "This is the post title",
    content:
      "Test Post content",
    imageUrl: "https://picsum.photos/800/400",
    author: {
      name: "John Doe",
      avatarUrl: "https://i.pravatar.cc/150?img=3",
    },
    date: "April 8, 2023",
  };

  return (
    <div className="bg-[#1f1f1f] text-white min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto py-20">
        <PostCard post={post} />
      </main>
      <Footer />
    </div>
  );
};

export default Post;