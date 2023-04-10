import React, { useState } from "react";

// AddCommentForm component receives addComment function as a prop
const AddCommentForm = ({ addComment }) => {
  // State to manage the text input value
  const [text, setText] = useState("");

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the text input is not empty
    if (text.trim()) {
      // Call the addComment function with a new comment object
      addComment({ id: Date.now(), text, children: [] });
      // Reset the text input value
      setText("");
    }
  };

  // Render the AddCommentForm component
  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <textarea
        value={text}
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
    </form>
  );
};

export default AddCommentForm;
