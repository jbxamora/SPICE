import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PostPreview from "./PostPreview";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState(false);

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["image"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Title:", title);
    console.log("Content:", content);
  };

  return (
    <div className="container w-full md:w-2/3 lg:w-1/2 mx-auto mt-10 px-4">
      {!preview && <h2 className="text-3xl font-bold mb-6">Create a Post</h2>}
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-bold mb-2">
            Title
          </label>
          {!preview ? (
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              required
              style={{ minHeight: "4rem" }}
            />
          ) : (
            <h3 className="text-xl font-semibold">{title}</h3>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-bold mb-2">
            Content
          </label>
          {!preview ? (
            <ReactQuill
              id="content"
              value={content}
              onChange={setContent}
              theme="snow"
              className="text-lg mt-auto px-3 py-4"
              style={{ minHeight: "25rem", className: "h-44" }}
              modules={{ toolbar: toolbarOptions }}
            />
          ) : (
            <PostPreview content={content} />
          )}
          <button
            type="button"
            className="bg-gray-600 text-white px-6 py-3 rounded-md text-lg hover:bg-gray-700 ml-4"
            onClick={() => setPreview(!preview)}
          >
            {preview ? "Hide" : "Show"} Preview
          </button>
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
