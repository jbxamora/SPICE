const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const db = require('../config/connection');
const {User, Recipes, Comment}= require('../models');


const userData = require('./userSeed.json');
const recipeData = require('./recipeSeed.json');
const commentData = require('./commentSeed.json');



db.once('open', async () => {
    // clean database
    await User.deleteMany({});
    await Recipes.deleteMany({});
    await Comment.deleteMany({});
    
  // Create users and store them in an array
  const users = await User.insertMany(userData);

  // Assign recipeCreator for each recipe using the users array
  for (let i = 0; i < recipeData.length; i++) {
    const userIndex = i % users.length;
    recipeData[i].recipeCreator = users[userIndex]._id;
  }


    // bulk create each model
    const recipes = await Recipes.insertMany(recipeData);
    const comments = await Comment.insertMany(commentData);

    
console.log("We have Seeds!")
    process.exit(0);
});