// post for the recipes select, create, remove and update
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PostPreview = ({ content }) => {
  return (
    <div className="post-preview mx-auto ">
      <ReactQuill
        value={content}
        readOnly
        theme="bubble"
        className="mt-3"
        style={{ minHeight: "25rem", className: "h-44" }}
      />
    </div>
  );
};

export default PostPreview;
