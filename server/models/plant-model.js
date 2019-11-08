module.exports = (sequelize, { UUID, STRING }) => {
  const plant = sequelize.define('plant', {
    photoUrl: STRING,
    nookId: UUID,
    plantTypeId: UUID,
  });
  plant.associate = models => {
    plant.belongsTo(models.nook);
    plant.belongsTo(models.plantType);
    plant.hasMany(models.watering);
  };
  return plant;
};
