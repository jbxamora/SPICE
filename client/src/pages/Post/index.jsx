import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/NavBar";
import FullPost from "../../components/FullPost";
import { postIngredients, dummyPosts } from "../../constants/constants";
import IngredientsCard from "../../components/IngredientCard";
import Comments from "../../components/Comments";

const Post = () => {
  // Get the post ID from the URL parameters
  const { id } = useParams();

  // Find the post from the list of dummyPosts
  const post = dummyPosts.find((post) => post.id === id);

  // Get the ingredients for the post from postIngredients
  const ingredients = postIngredients[id];

  // Display a "Post not found" message if the post is not found
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

  // Render the Post component with its child components
  return (
    <div className="bg-[#1f1f1f] text-white min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto py-20">
        <div className="flex justify-between">
          <div className="flex-grow">
            {/* Render the FullPost component with the post data */}
            <FullPost post={post} />

            {/* Render the Comments component with the post ID */}
            <Comments postId={id} />
          </div>

          {/* Render the IngredientsCard component with the ingredients data */}
          {ingredients && <IngredientsCard ingredients={ingredients} />}
        </div>
      </main>
    </div>
  );
};

export default Post;
