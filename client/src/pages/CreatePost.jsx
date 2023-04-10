import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


const CreatePost = () => {

  const [newItem, setNewItem] = useState("")
  const [ingredients, setIngredientsList] = useSate([])
  const randID = () => {
    return Math.floor(Math.random() * (100 - 1) + 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setIngredientsList(currentIngredients => {
      return [...currentIngredients, {
        id: randID(),
        title: newItem,
        complete: false
      },
      ]
    })

    setNewItem("")
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="item">Ingredients</label>
          <input
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1>Ingredients List</h1>
      <ul className="list">
        {ingredients.map(i => {
          return (
          <li key={i.id}>
            <label>
              <input type="checkbox" checked={i.complete}/>
              {i.title}
            </label>
          </li>
          )
        })}
      </ul>
    </>
  );

}

export default CreatePost;
