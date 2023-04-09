const db = require('../config/connection');
const {User, Recipe, Comment}= require('../models');


const userData = require('./userSeed.json');
const recipeData = require('./recipeSeed.json');
const commentData = require('./commentSeed.json');



db.once('open', async () => {
    // clean database
    await User.deleteMany({});
    await Recipe.deleteMany({});
    await Comment.deleteMany({});
  
    // bulk create each model
    const users = await User.insertMany(userData);
    const recipes = await Recipe.insertMany(recipeData);
    const comments = await Comment.insertMany(commentData);

    
console.log("We have Seeds!")
    process.exit(0);
});