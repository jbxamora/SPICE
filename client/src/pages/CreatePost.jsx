import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { ADD_RECIPE } from '../utils/mutations';
import { QUERY_RECIPES, QUERY_ME } from '../utils/queries';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Quill from 'quill';


const CreatePost = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");
  const [imgUrl, setImgurl] = useState("");

  const removeHtmlTags = (html) => {
    const quill = new Quill(document.createElement('div'));
    quill.setContents(quill.clipboard.convert(html));
    return quill.getText();
  };
  const [addRecipes, { error, data }] = useMutation(ADD_RECIPE, {
    update(cache, { data: { addRecipe } }) {
      try {
        const { recipes } = cache.readQuery({ query: QUERY_RECIPES }) ?? {};

        if (recipes) {
          cache.writeQuery({
            query: QUERY_RECIPES,
            data: { recipes: [addRecipe, ...recipes] },
          });
        }
      } catch (e) {
        console.error(e);
      }
      // update me object's cache
      const { meData } = cache.readQuery({ query: QUERY_ME })?.meData ?? {};
      if (meData) {
        const { me } = meData;
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, recipes: [...me.recipes, addRecipe] } },

        });
      };
    },
  });
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
    ["clean"],

  ];
  // Add this function to remove the HTML tags
  const transform = (node) => {
    if (node.type === 'tag' && node.name === 'span' && node.attribs.style) {
      delete node.attribs.style;
    }
    return convertNodeToElement(node, 0, transform);
  };

  const parsedInstructions = ReactHtmlParser(instructions, { transform });

  console.log("Content:", parsedInstructions);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    try {
      const { data } = await addRecipes({
        variables: {
          name: name,
          imgUrl: imgUrl,
          instructions: parsedInstructions,
          ingredients: ingredients,
        },
      });

      console.log("Title:", name);
      console.log("Content:", instructions);
      console.log("imgUrl:", imgUrl);
      console.log("Ingredients:", ingredients);

      // Redirect to /home after successful submission
      navigate("/home");
    } catch (err) {
      console.error("Error creating recipe:", err);
    }
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={instructions}
            onChange={(content, delta, source, editor) => {
              const plainText = removeHtmlTags(content);
              setInstructions(plainText);
            }}
            theme="snow"
            className="text-lg mt-auto px-3 py-4"
            style={{ minHeight: "25rem", className: "h-44 text-white" }}
            modules={{ toolbar: toolbarOptions }}
          />
        </div>
        {/* imgURL - START */}
        <div className="mb-4">
          <label
            htmlFor="imgurl"
            className="block text-sm font-bold text-white mb-2"
          >
            imgURL
          </label>
          <input
            type="text"
            id="title"
            value={imgUrl}
            onChange={(e) => setImgurl(e.target.value)}
            className="w-full p-4 text-lg border bg-transparent text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            required
            style={{ minHeight: "4rem" }}
          />
        </div>
        {/* imgURL - END */}
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
