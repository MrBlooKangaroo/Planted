'use strict';
module.exports = (sequelize, DataTypes) => {
  const watering = sequelize.define('watering', {
    expectedAt: DataTypes.DATE,
    executedAt: DataTypes.DATE,
    plantId: DataTypes.UUID
  }, {});
  watering.associate = function(models) {
    // associations can be defined here
    watering.belongsTo(models.plant);
  };
  return watering;
};