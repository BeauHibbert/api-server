'use strict';

const { sequelize, ClothesModel, FoodModel } = require('./src/models');

sequelize.sync()
  .then(() => {
    console.log('Success!');
  })
  .catch((err) => {
    console.error(err);
  });