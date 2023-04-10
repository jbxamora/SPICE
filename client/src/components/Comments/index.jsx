import React, { useState } from "react";
import Comment from "../Comment";
import { dummyComments } from "../../constants/constants";

const Comments = ({ postId }) => {
  const initialComments = dummyComments[postId] || [];
  const [comments, setComments] = useState(initialComments);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const deleteComment = (commentId) => {
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(updatedComments);
  };

  return (
    <div className="space-y-4 bg-transparent border border-cyan-400 shadow-black shadow-xl p-4 rounded-lg">
      {comments.map((comment) => (
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
