const db = require('../config/connection');
const { User, Recipes, Comment } = require('../models');
const userSeeds = require('./userSeed.json');
const recipeSeeds = require('./recipeSeed.json');
const commentSeeds = require('./commentSeed.json');
db.once('open', async () => {
  try {
    await Recipes.deleteMany({});
    await User.deleteMany({});
    await Comment.deleteMany({});
    await User.create(userSeeds);
    for (let i = 0; i < recipeSeeds.length; i++) {
      const userIndex = i % userSeeds.length;
      const { _id, recipeCreator } = await Recipes.create({
        ...recipeSeeds[i],
        recipeCreator: userSeeds[userIndex]._id,
      });
      const user = await User.findOneAndUpdate(
        { username: recipeCreator },
        {
          $addToSet: {
            recipes: _id,
          },
        }
      );
    }
    for (let i = 0; i < commentSeeds.length; i++) {
      const userIndex = i % userSeeds.length;
      const recipeIndex = i % recipeSeeds.length;
      const { _id, userId, recipeId } = await Comment.create({
        ...commentSeeds[i],
        userId: userSeeds[userIndex]._id,
        recipeId: recipeSeeds[recipeIndex]._id,
      });
      const user = await User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: {
            comments: _id,
          },
        }
      );
      const recipe = await Recipes.findOneAndUpdate(
        { _id: recipeId },
        {
          $addToSet: {
            comments: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('all done!');
  process.exit(0);
});