import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";
import { useParams } from 'react-router-dom';

const AddCommentForm = ({ reply }) => {
  const { id } = useParams();
  const recipeId = id;

  const [commentText, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      try {
        await addComment({
          variables: {
            recipeId,
            commentText,
            parentId: reply ? reply._id : null, // Set the parent ID if this is a reply comment
          },
        });
        setText("");
        setSubmitted(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const showButton = !submitted && (!reply || !reply.comments || reply.comments.length === 0); // Hide the button if there are comments

  if (submitted) {
    return;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <textarea
        value={commentText}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 bg-transparent text-white border border-cyan-400 rounded"
        rows="1"
      ></textarea>
      {showButton && (
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Add Comment
        </button>
      )}
      {error && <p className="text-red-500">Error adding comment.</p>}
    </form>
  );
};

export default AddCommentForm;
