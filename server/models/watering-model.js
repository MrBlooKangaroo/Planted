const { Level } = require('../utils/enums.ts');

module.exports = (sequelize, {
  UUID, ENUM, DATE
}) => {
  const watering = sequelize.define('watering', {
    priority: ENUM([...Level]),
    plantId: UUID,
    expectedAt: DATE,
    executedAt: DATE
  }, {});
  watering.associate = models => {
    watering.belongsTo(models.plant);
  };
  return watering;
};