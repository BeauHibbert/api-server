'use strict';

module.exports = (sequelize, DataTypes) => {

  return sequelize.define('baseball', {
    average: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    baseballTeam: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};

module.exports = baseballSchema;