import React, { useState, useEffect } from "react";
import Comment from "../Comment";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {QUERY_SINGLE_RECIPE} from '../../utils/queries'

const Comments = () => {
    
  const { id } = useParams();
  const recipeId = id;

  const [allComments, setComments] = useState([]);

  const { loading, data } = useQuery(QUERY_SINGLE_RECIPE, {
    variables: { recipeId: recipeId },
  });

  useEffect(() => {
    if (data) {
      setComments(data.recipe.comments);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const addComment = (newComment) => {
    setComments([...allComments, newComment]);
  };

  const deleteComment = (commentId) => {
    const updatedComments = allComments.filter(
      (comment) => comment._id !== commentId
    );
    setComments(updatedComments);
  };

  return (
    <div className="space-y-4 bg-transparent border border-cyan-400 shadow-black shadow-xl p-4 rounded-lg">
      {allComments.map((comment) => (
        <Comment
          key={comment._id}
          comment={comment}
          addComment={addComment}
          deleteComment={deleteComment}
        />
      ))}
    </div>
  );
};

export default Comments;
