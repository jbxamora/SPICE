const db = require('../config/connection');
const { User, Recipe } = require('../models');
const userSeed = require('./userSeed.json');
const recipeSeed = require('./recipeSeed.json');

db.once('open', async () => {
  try {
    await Recipe.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeed);

    for (let i = 0; i < recipeSeed.length; i++) {
      const { _id, recipeAuthor } = await Recipe.create(recipeSeed[i]);
      const user = await User.findOneAndUpdate(
        { username: recipeAuthor },
        {
          $addToSet: {
            recipes: _id,
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
