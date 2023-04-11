// recipe model needs: name, ingredients, instructions, imgurl, recipe creator
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


// Questions:
// 1. delete or keep checkbox?
// 2. split this out into different components?
//    * recipe name form
//    * instructions form
//    * add ingredients form

const CreatPost = () => {

// useState's for ingredients, recipes and instructions
  // input box for adding new ingredients
  const [newItem, setNewItem] = useState("")
  // this adds new ingredients to the ingredients list
  const [ingredients, setIngredients] = useState([])

  // input box for adding recipe name
  const [newRecipe, setNewRecipe] = useState("")
  // adds recipe name
  const [recipeName, setRecipeName] = useState([])

  // input box for adding instructions for recipe
  const [newInstructions, setNewInstructions] = useState("")
  // adds instructions
  const [instruct, setInstruct] = useState([])

// functions for adding recipe name, instructions and ingredients
  // add recipe name 
  function addRecipe(e) {
    e.preventDefault()

    setRecipeName(addRecipe => {
      return [
        ...addRecipe, 
        {
          id: crypto.randomUUID(),
          title: newRecipe,
        }
      ]
    })

    setNewRecipe("")
  }

  // add instructions to recipe 
  function addInstructions(e) {
    e.preventDefault()

    setInstruct(addInstruct => {
      return [
        ...addInstruct,
        {
          id: crypto.randomUUID,
          title: newInstructions,
        }
      ]
    })

    setNewInstructions("")
  }


  // Add ingredients 
  function addIngredient(e) {
    e.preventDefault()

    // create array of ingredients to add ingredients list
    setIngredients(addItem => {
      return [
        ...addItem,
        {
          id: crypto.randomUUID(),
          title: newItem,
          state: false
        }
      ]
    })

    setNewItem("")
  }

  // checkbox might not be needed
  // // Updates ingredients checked state
  // function changeState(id, state) {
  //   setIngredients(itemList => {
  //     return itemList.map(item => {
  //       if (item.id === id) {
  //         return { ...item, state }
  //       }
  //       // this return is needed or else the page will be blank (I don't know why)
  //       return item;
  //     })
  //   })
  // }

// delete functions for recipe, instructions and ingredients
  // Delete Recipe Name
  function deleteRecipeName(id) {
    setRecipeName(itemList => {
      return itemList.filter(item => item.id !== id)
    })
  }

  // Delete instructions
  function deleteInstructions(id) {
    setInstruct(itemList => {
      return itemList.filter(item => item.id !== id)
    })
  }

  // Delete item from the ingredients list
  function deleteIngredients(id) {
    setIngredients(itemList => {
      return itemList.filter(item => item.id !== id)
    })
  }


// HTML return elements  
  return (
    <>
      {/* This form is to add a recipe name */}
      <div>
        <form onSubmit={addRecipe}>
          <div>
            <label>Recipe Name</label>
            <input 
              value={newRecipe}
              // getting value of input and setting it as the new value and putting into newRecipe
              onChange={e => setNewRecipe(e.target.value)} 
              type="text" 
              id="recipe" 
            />
          </div>
          <button>Add</button>
        </form>
      </div>

      {/* This form is to add recipe instructions */}
      <div>
        <form onSubmit={addInstructions}>
          <div>
            <label>Recipe Instructions</label>
            <input 
              value={newInstructions}
              onChange={e => setNewInstructions(e.target.value)}
              type="textarea" 
              id="instruction" 
            />
          </div>
          <button>Add</button>
        </form>
      </div>


      {/* This form is the add new ingredients */}
      <form onSubmit={addIngredient}>
        <div>
          <label>Add Ingredients</label>
          <input
            value={newItem}
            // getting value of input and setting it as the new value and putting into newItem
            onChange={e => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button>Add</button>
      </form>

      <h3>Create new Recipe</h3>
      <ul>
        {/* adds recipe name */}
        {recipeName.map(i => {
          return (
            <li key={i.id}>
              <h2>Recipe Name:</h2>
              <label>{i.title}</label>
              <button 
                onClick={() => deleteRecipeName(i.id)} 
              >
                Delete
              </button>
            </li>
          )
        })}

        {/* adds instructions */}
        {instruct.map(i => {
          return (
            <li key={i.id}>
              <h2>Instructions:</h2>
              <label>{i.title}</label>
              <button 
                onClick={() => deleteInstructions(i.id)} 
              >
                Delete
              </button>
          </li>
          )
        })}


        {/* adds ingredients from the ingredients array */}
        {ingredients.length > 0 && <h2>Ingredients List:</h2> }
        {ingredients.map(i => {
          return (
            <li key={i.id}>
              <label>
                {/* <input 
                  type="checkbox" 
                  checked={i.state}
                  // This function handles if the checkbox has been checked or not
                  onChange={e => changeState(i.id, e.target.checked)} 
                /> */}
                {i.title}
              </label>
              <button 
                // Note - function call to deleteIngredients function or it won't work
                onClick={() => deleteIngredients(i.id)} 
              >
                Delete
              </button>
            </li>
          )
        })}
      </ul>
      <button>Create Recipe</button>
    </>
  )
};

export default CreatPost;

