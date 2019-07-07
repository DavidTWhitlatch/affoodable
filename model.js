const Sequelize = require('sequelize');

// connect to database

const sequelize = new Sequelize({
  database: 'affoodable',
  dialect: 'postgres',
  define: {
    underscored: true,
  },
});

// define building model
class User extends Sequelize.Model { }
User.init({
  name: Sequelize.STRING,
  password_digest: Sequelize.STRING,
}, { sequelize, modelName: 'user' });

// define architect model

class Ingredient extends Sequelize.Model { }
Ingredient.init({
  name: Sequelize.STRING,
}, { sequelize, modelName: 'ingredient' });

// define syle model

class Recipe extends Sequelize.Model { }
Recipe.init({
  name: Sequelize.STRING,
  content: Sequelize,String
}, { sequelize, modelName: 'recipe' });

// associations

// M:M
User.belongsToMany(Ingredient, { through: 'fridge' });
Ingredient.belongsToMany(User, { through: 'fridge' });

Recipe.belongsToMany(Ingredient, { through: 'recipes_ingredients'});
Ingredient.belongsToMany(Recipe, { through: 'recipes_ingredients'});

// export models

module.exports = {
  sequelize,
  User,
  Ingredient,
  Recipe
};

