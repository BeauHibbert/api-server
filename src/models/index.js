'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const iModel = require('./lib/iModel.js');
const footballSchema = require('./football.schema.js');
const baseballSchema = require('./baseball.schema.js');

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