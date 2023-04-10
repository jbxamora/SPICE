import React, { useState } from "react";
import Comment from "../Comment";
import { dummyComments } from "../../constants/constants";

// Comments component receives postId as a prop
const Comments = ({ postId }) => {
  // Get initial comments based on the postId or an empty array if no comments are found
  const initialComments = dummyComments[postId] || [];
  // State to manage the comments
  const [comments, setComments] = useState(initialComments);

  // Function to add a new comment
  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  // Function to delete a comment by its ID
  const deleteComment = (commentId) => {
    // Filter out the comment with the given ID
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    // Update the comments state
    setComments(updatedComments);
  };

  // Render the Comments component
  return (
    <div className="space-y-4 bg-transparent border border-cyan-400 shadow-black shadow-xl p-4 rounded-lg">
      {comments.map((comment) => (
        // Render a Comment component for each comment in the comments array
        <Comment
          key={comment.id}
          comment={comment}
          addComment={addComment}
          deleteComment={deleteComment}
        />
      ))}
    </div>
  );
};

export default Comments;
