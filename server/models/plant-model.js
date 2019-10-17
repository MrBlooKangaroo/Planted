module.exports = (sequelize, {
  UUID, STRING
}) => {
  const plant = sequelize.define('plant', {
    photoUrl: STRING,
    nookId: UUID,
    plantTypeId: UUID
  }, {});
  plant.associate = models => {
    plant.belongsTo(models.nook, { foreignKey: 'nookId', as: 'nook' });
    plant.belongsTo(models.plantType, { foreignKey: 'plantTypeId', as: 'plantType' })
    plant.hasMany(models.watering, { as: 'waterings'}) 
  };
  return plant;
};