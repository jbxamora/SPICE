import React, { useState, useEffect } from "react";
import Comment from "../Comment";
import AddCommentForm from "../CommentForm";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_RECIPE } from '../../utils/queries';

const Comments = () => {
  const { id } = useParams();
  const recipeId = id;

  const [allComments, setComments] = useState([]);

  const { loading, data } = useQuery(QUERY_SINGLE_RECIPE, {
    variables: { recipeId: recipeId },
  });

  useEffect(() => {
    if (data && data.recipe) {
      setComments(data.recipe.comments);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-4 bg-transparent border border-cyan-400 shadow-black shadow-xl p-4 rounded-lg">
      {allComments.length === 0 ? (
        <div>
          <p>No comments yet. Be the first to add a comment!</p>
        </div>
      ) : (
        allComments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))
      )}
      <AddCommentForm showButton={allComments.length === 0} />
    </div>
  );
};

export default Comments;
