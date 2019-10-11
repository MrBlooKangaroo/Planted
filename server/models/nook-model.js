const { Level } = require('../utils/enums.ts');
'use strict';
module.exports = (sequelize, DataTypes) => {
  const nook = sequelize.define(
    'nook', 
    {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    photo: DataTypes.STRING,
    luxLevel: DataTypes.ENUM(...Level),
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    userId: DataTypes.UUID,
    
  }, {});
  nook.associate = function(models) {
    nook.belongsTo(models.user);
  };
  return nook;
}; 