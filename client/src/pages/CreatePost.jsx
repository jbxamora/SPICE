import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const toolbarOptions = [
    ["bold", "italic", "underline"], // toggled buttons
    ["blockquote"],
    ["image"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ font: [] }],
    [{ align: [] }],

  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Title:", title);
    console.log("Content:", content);
    console.log("Ingredients:", ingredients);
  };

   const handleAddIngredient = () => {
     setIngredients([...ingredients, ""]);
   };

   const handleUpdateIngredient = (index, value) => {
     const updatedIngredients = ingredients.map((ingredient, i) => {
       return i === index ? value : ingredient;
     });
     setIngredients(updatedIngredients);
   };

   const handleRemoveIngredient = (index) => {
     const updatedIngredients = ingredients.filter((_, i) => i !== index);
     setIngredients(updatedIngredients);
   };


  return (
    <div className="container w-full md:w-2/3 lg:w-1/2 mx-auto mt-10 px-4">
      <h2 className="flex justify-center text-white text-3xl font-bold mb-6">
        Create a Post
      </h2>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-bold text-white mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 text-lg border bg-transparent text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            required
            style={{ minHeight: "4rem" }}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-white text-sm font-bold mb-2"
          >
            Content
          </label>
          <ReactQuill
            id="content"
            value={content}
            onChange={setContent}
            theme="snow"
            className="text-lg mt-auto px-3 py-4"
            style={{ minHeight: "25rem", className: "h-44 text-white" }}
            modules={{ toolbar: toolbarOptions }}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-white text-sm font-bold mb-2"
          >
            Ingredients
          </label>
          {ingredients.map((ingredient, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleUpdateIngredient(index, e.target.value)}
                className="w-full p-4 text-lg border bg-transparent text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                style={{ minHeight: '2rem' }}
              />
              <button
                type="button"
                className="ml-2 text-red-500 hover:text-red-700"
                onClick={() => handleRemoveIngredient(index)}
              >
                &times;
              </button>
            </div>
          ))}
          <button
            type="button"
            className="text-white bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            onClick={handleAddIngredient}
          >
            Add Ingredient
          </button>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md text-lg hover:bg-violet-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};


export default CreatePost;
