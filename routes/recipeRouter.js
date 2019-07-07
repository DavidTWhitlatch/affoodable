const express = require('express');

const { Recipe } = require('../model');

const recipeRouter = express.Router();

recipeRouter.route('/')

  .get( async ( req, rez, next ) => {
    try {
      const recipes = Recipe.findAll();
      res.json(recipes);
    } catch (e) {
      next(e);
    }
  })

module.exports = recipesRouter;
