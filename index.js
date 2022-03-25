'use strict';

const { sequelize, FootballModel, BaseballModel } = require('./src/models');

sequelize.sync()
  .then(() => {
    console.log('Success!');
  })
  .catch((err) => {
    console.error(err);
  });