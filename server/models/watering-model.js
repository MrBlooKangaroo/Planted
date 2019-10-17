module.exports = (sequelize, {
  UUID, DATE
}) => {
  const watering = sequelize.define('watering', {
    expectedAt: DATE,
    executedAt: DATE,
    plantId: UUID
  }, {})
  watering.associate = function(models) {
    watering.belongsTo(models.plant)
  }
  return watering
}
