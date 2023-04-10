// Comment.js
import React, { useState } from "react";
import AddCommentForm from "../CommentForm";

const Comment = ({ comment, addComment, deleteComment }) => {
  const { id, content, author, date, replies } = comment;
  const [showAddCommentForm, setShowAddCommentForm] = useState(false);

  const handleDeleteClick = () => {
    deleteComment(id);
  };

  const handleReplyClick = () => {
    setShowAddCommentForm(!showAddCommentForm);
  };

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
        <AddCommentForm
          addComment={(newComment) => addComment(id, newComment)}
        />
      )}
    </div>
  );
};

export default Comment;
