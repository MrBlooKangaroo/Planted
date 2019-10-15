const { PlantHealth } = require('../utils/enums.ts');

module.exports = (sequelize, {
  UUID, STRING, ENUM
}) => {
  const plant = sequelize.define('plant', {
    name: STRING,
    photoUrl: STRING,
    health: ENUM([...PlantHealth]),
    nookId: UUID,
    plantTypeId: UUID
  }, {});
  plant.associate = models => {
    plant.belongsTo(models.nook);
    plant.belongsTo(models.plantType);
    plant.hasOne(models.watering);
  };
  return plant;
};