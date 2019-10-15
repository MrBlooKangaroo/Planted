
module.exports = (sequelize, {
  UUID, ENUM, DATE
}) => {
  const watering = sequelize.define('watering', {
    plantId: UUID,
    expectedAt: DATE,
    executedAt: DATE
  }, {});
  watering.associate = models => {
    watering.belongsTo(models.plant);
  };
  return watering;
};