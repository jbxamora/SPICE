import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";
import { useParams } from 'react-router-dom';

const AddCommentForm = () => {
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
          },
        });
        setText("");
        setSubmitted(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (submitted) {
    return <p className="text-white">Thank you for your comment!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <textarea
        value={commentText}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 bg-transparent text-white border border-cyan-400 rounded"
        rows="1"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Add Comment
      </button>
      {error && <p className="text-red-500">Error adding comment.</p>}
    </form>
  );
};

export default AddCommentForm;
