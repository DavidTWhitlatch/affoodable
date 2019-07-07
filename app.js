const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const buildingRouter = require('./routes/buildingRouter');

const PORT = 3001;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/recipes', recipeRouter);

app.use((e, req, res, next) => {
  if (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});


module.exports = {
  app
};

