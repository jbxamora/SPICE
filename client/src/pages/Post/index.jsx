import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/NavBar";
import FullPost from "../../components/FullPost";
import { postIngredients, dummyPosts } from "../../constants/constants";
import IngredientsCard from "../../components/IngredientCard";
import Comments from "../../components/Comments";

const Post = () => {
  const { id } = useParams();
  const post = dummyPosts.find((post) => post.id === id);
  const ingredients = postIngredients[id];


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
        <div className="flex justify-between">
          <div className="flex-grow">
            <FullPost post={post} />
            <Comments postId={id} /> 
          </div>
          {ingredients && <IngredientsCard ingredients={ingredients} />}
        </div>
      </main>
    </div>
  );
};

export default Post;
