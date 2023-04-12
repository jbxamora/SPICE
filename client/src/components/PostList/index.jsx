import React from "react";
import PostCard from "../PostCard";
import SideBar from "../SideBar";
import { dummySavedPosts, potentialFriends } from "../../constants/constants";
import { useQuery } from '@apollo/client';
import { QUERY_RECIPES } from '../../utils/queries';



const PostsList = ({ posts, savedPosts }) => {
  
  const { data, loading, error } = useQuery(QUERY_RECIPES);
  if (error) {
    console.error("Error executing the QUERY_RECIPES query:", error);
  }
  const recipes = data?.recipes || [];
  console.log(17, recipes)

  return (
    <div className="container w-full mx-auto mt-8 px-4">
      {/* Heading text */}
      <h2 className="text-3xl text-left px-11 ml-11 text-white font-bold mb-6">
        Try Making A New Dish!
      </h2>

      {/* Container for PostCard and SideBar components */}
      <div className="flex flex-wrap">
        {/* Container for PostCard components */}
        <div className="w-full md:w-3/4 lg:w-3/5 px-4">
          {/* Grid to display posts */}
          <div className="grid grid-cols-1 gap-8 place-items-center">
            {/* Iterate through the posts array and render a PostCard component for each post */}
            {recipes.map((recipes) => (
              <PostCard key={recipes._id} recipe={recipes} />
            ))}
          </div>
        </div>

        {/* Render SideBar component with savedPosts and friends props */}
        <SideBar savedPosts={dummySavedPosts} friends={potentialFriends} />
      </div>
    </div>
  );
};

export default PostsList;