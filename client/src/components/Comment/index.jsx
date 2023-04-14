import React, { useState } from "react";
import AddCommentForm from "../CommentForm";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT, DELETE_COMMENT } from "../../utils/mutations";
import { useParams } from 'react-router-dom';





// Comment component receives comment object, addComment, and deleteComment functions as props
const Comment = ({ comment }) => {
  // Destructure properties from the comment object
  const { id } = useParams();
  const recipeId = id;


  const { _id, commentText, commentAuthor, createdAt } = comment;
  // State to manage the visibility of the AddCommentForm
  const [showAddCommentForm, setShowAddCommentForm] = useState(false);

  const [addComment] = useMutation(ADD_COMMENT);
  const [deleteComment] = useMutation(DELETE_COMMENT);

  // Function to handle the deletion of a comment
  const handleDeleteClick = async () => {
    try {
      await deleteComment({ variables: { recipeId, commentId: _id } });
    } catch (error) {
      console.error(error);
    }
  };

  // Function to toggle the visibility of the AddCommentForm
  const handleReplyClick = () => {
    setShowAddCommentForm(!showAddCommentForm);
  };

  // Render the Comment component
  return (
    <div className="border border-cyan-400 p-4 rounded-lg space-y-2">
      <div className="flex justify-between items-center">
        <div className="font-bold">{commentAuthor}</div>
        <button onClick={handleDeleteClick} className="text-red-500">
          Delete
        </button>
      </div>
      <div>{commentText}</div>
      <div className="text-gray-400 text-sm">{createdAt}</div>
      <button onClick={handleReplyClick} className="text-blue-500">
        Reply
      </button>
      {showAddCommentForm && (
        // Render the AddCommentForm and pass the addComment function with the current comment id
        <AddCommentForm
          addComment={async (commentText) => {
            try {
              await addComment({ variables: { recipeId, commentText } });
            } catch (error) {
              console.error(error);
            }
          }}
        />
      )}
    </div>
  );
};

export default Comment;
