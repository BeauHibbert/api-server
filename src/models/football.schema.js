'use strict';

module.exports = (sequelize, DataTypes) => {

  return sequelize.define('football', {
    team: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wins: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    losses: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};

