import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Title:", title);
    console.log("Content:", content);
  };

  return (
    <div className="container w-45 mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-6">Create a Post</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            required
            style={{ minHeight: "4rem" }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-bold mb-2">
            Content
          </label>
          <ReactQuill
            id="content"
            value={content}
            onChange={setContent}
            theme="snow"
            className="text-lg mt-auto px-3 py-4"
            style={{ minHeight: "25rem",
        className:"h-44" }}
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md text-lg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
