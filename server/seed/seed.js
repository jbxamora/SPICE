const db = require('../config/connection');
const { User, Recipes, Comment } = require('../models');
const userSeeds = require('./userSeed.json');
const recipeSeeds = require('./recipeSeed.json');
const commentSeeds = require('./commentSeed.json');
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
  console.log('all done!');
  process.exit(0);
});
