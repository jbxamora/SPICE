import React, { useState } from "react";
import AddCommentForm from "../CommentForm";

// Comment component receives comment object, addComment, and deleteComment functions as props
const Comment = ({ comment, addComment, deleteComment }) => {
  // Destructure properties from the comment object
  const { id, content, author, date, replies } = comment;
  // State to manage the visibility of the AddCommentForm
  const [showAddCommentForm, setShowAddCommentForm] = useState(false);

  // Function to handle the deletion of a comment
  const handleDeleteClick = () => {
    deleteComment(id);
  };

  // Function to toggle the visibility of the AddCommentForm
  const handleReplyClick = () => {
    setShowAddCommentForm(!showAddCommentForm);
  };

  // Render the Comment component
  return (
    <div className="border border-cyan-400 p-4 rounded-lg space-y-2">
      <div className="flex justify-between items-center">
        <div className="font-bold">{author}</div>
        <button onClick={handleDeleteClick} className="text-red-500">
          Delete
        </button>
      </div>
      <div>{content}</div>
      <div className="text-gray-400 text-sm">{date}</div>
      {replies && (
        <div className="ml-4">
          {replies.map((reply) => (
            // Render nested Comment components for each reply
            <Comment
              key={reply.id}
              comment={reply}
              addComment={addComment}
              deleteComment={deleteComment}
            />
          ))}
        </div>
      )}
      <button onClick={handleReplyClick} className="text-blue-500">
        Reply
      </button>
      {showAddCommentForm && (
        // Render the AddCommentForm and pass the addComment function with the current comment id
        <AddCommentForm
          addComment={(newComment) => addComment(id, newComment)}
        />
      )}
    </div>
  );
};

export default Comment;
