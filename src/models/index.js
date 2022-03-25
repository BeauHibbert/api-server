'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const footballSchema = require('./football.schema.js');
const baseballSchema = require('./baseball.schema.js');

// const DATABASE_URL = process.env.NODE_ENV === 'test'
//   ? 'sqlite::memory'
//   : process.env.DATABASE_URL || 'postgresql://localhost:5432/database_development';

// const sequelize = new Sequelize(DATABASE_URL, {
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// });

const sequelize = new Sequelize('sqlite::memory');

const FootballModel = footballSchema(sequelize, DataTypes);
const BaseballModel = baseballSchema(sequelize, DataTypes);

FootballModel.hasMany(BaseballModel, { foreignKey: 'footballId', sourceKey: 'id' });
BaseballModel.belongsTo(FootballModel, { foreignKey: 'footballId', sourceKey: 'id' });

module.exports = {
  sequelize,
  baseballCollection: new iModel(FootballModel),
  footballCollection: new iModel(BaseballModel)
};