const { Health } = require('../utils/enums.ts');

'use strict';
module.exports = (sequelize, DataTypes) => {
  const plant = sequelize.define('plant', {
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    health: DataTypes.ENUM([...Health]),
    userId: DataTypes.UUID,
    nookId: DataTypes.UUID
  }, {});
  plant.associate = function(models) {
    plant.belongsTo(models.nook);
    plant.belongsTo(models.user);
  };
  return plant;
};