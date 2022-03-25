'use strict';

const express = require('express');
const foodRouter = require('../routes/food.js');
const clothesRouter = require('../routes/clothes.js');

const app = express();

app.use(express.json());

app.use(foodRouter);
app.use(clothesRouter);

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log('App is running on port: ', PORT);
    });
  },
};