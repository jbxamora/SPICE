const db = require('../config/connection');
const { User, Recipe, Comment } = require('../models');
const userSeeds = require('./userSeed.json');
const recipeSeeds = require('./recipeSeed.json');
const commentSeeds = require('./commentSeed.json');
const mongoose = require('mongoose');


db.once('open', async () => {
  try {
    await Recipe.deleteMany({});
    await User.deleteMany({});
    await Comment.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < recipeSeeds.length; i++) {
      const userIndex = i % userSeeds.length;
      const { _id, recipeCreator } = await Recipe.create({
        ...recipeSeeds[i],
        recipeCreator: userSeeds[userIndex]._id,
      });
      const user = await User.findOneAndUpdate(
        { username: recipeCreator },
        {
          $addToSet: {
            selectedRecipeIds: _id, // Change 'recipes' to 'selectedRecipeIds'
          },
        }
      );
    }

    for (let i = 0; i < commentSeeds.length; i++) {
      const userIndex = i % userSeeds.length;
      const recipeIndex = i % recipeSeeds.length;
      await Comment.create({
        ...commentSeeds[i],
        userId: userSeeds[userIndex]._id,
        recipeId: recipeSeeds[recipeIndex]._id,
      });
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
