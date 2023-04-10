import React, { useState } from 'react';

const AddCommentForm = ({ addComment }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addComment({ id: Date.now(), text, children: [] });
      setText('');
    }
  };

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

