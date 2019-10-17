module.exports = (sequelize, {
  UUID, DATE
}) => {
  const watering = sequelize.define('watering', {
    expectedAt: DATE,
    executedAt: DATE,
    plantId: UUID
  }, {
    timestamps: false
  });
  watering.associate = models => {
    watering.belongsTo(models.plant, { foreignKey: 'plantId', as: 'plant'});
  };
  return watering;
};