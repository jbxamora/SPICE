import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/NavBar";
import FullPost from "../../components/FullPost";
import IngredientsCard from "../../components/IngredientCard";
import Comments from "../../components/Comments";
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_RECIPE } from '../../utils/queries';
import { useMutation } from '@apollo/client';
import { DELETE_RECIPE } from '../../utils/mutations';
import { AuthContext } from '../../utils/auth-context';

const Post = () => {
  // extract the postId value from the URL
  const { id } = useParams();
  console.log(id);
  const recipeId = id;

  const { user } = useContext(AuthContext);

  const { data, loading, error } = useQuery(QUERY_SINGLE_RECIPE, {
    variables: { recipeId },
  });
  if (error){
    console.error("Error getting recipe", error);
  }
  const recipe = data?.recipe || [];
  const [deleteRecipe] = useMutation(DELETE_RECIPE, {
    update(cache, { data: { deleteRecipe } }) {
      cache.evict({ id: cache.identify(deleteRecipe) });
      cache.gc();
    },
  });
  
  const handleDelete = async () => {
    try {
      await deleteRecipe({ variables: { recipeId: id } });
      window.location.replace('/home'); // Redirect to the home page after successful deletion
    } catch (err) {
      console.error('Error deleting recipe:', err);
    }
    
  };
  
  console.log(19, recipe);
  // Display a "Post not found" message if the recipe is not found
  if (!recipe) {
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
          {/* Render the FullPost component with the recipe data */}
          <FullPost recipe={recipe} />

          {/* Show the delete button only if the logged-in user is the recipe author */}
          {user && recipe.recipeAuthor && user.id === recipe.recipeAuthor.id && (
            <button
            className="bg-red-500 text-white px-4 py-2 rounded-md mb-4"
            onClick={handleDelete}
            >
              Delete Recipe
            </button>
          )}

          {/* Render the Comments component with the recipe ID */}
          <Comments recipe={recipe} />
        </div>

        {/* Render the IngredientsCard component */}
        <IngredientsCard />
        
      </div>
    </main>
  </div>
);
};

export default Post;
