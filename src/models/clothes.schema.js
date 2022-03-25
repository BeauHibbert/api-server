'use strict';

module.exports = (sequelize, DataTypes) => {

  return sequelize.define('clothes', {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};