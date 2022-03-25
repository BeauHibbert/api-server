'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const clothesSchema = require('./clothes.schema.js');
const foodSchema = require('./food.schema.js');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory'
  : process.env.DATABASE_URL || 'postgresql://localhost:5432/database_development';

const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const ClothesModel = clothesSchema(sequelize, DataTypes);
const FoodModel = foodSchema(sequelize, DataTypes);

module.exports = {
  sequelize,
  ClothesModel,
  FoodModel,
};