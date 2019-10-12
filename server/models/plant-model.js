const { Health } = require('../utils/enums.ts');

module.exports = (sequelize, {
  UUID, STRING, ENUM
}) => {
  const plant = sequelize.define('plant', {
    name: STRING,
    photo: STRING,
    health: ENUM([...Health]),
    userId: UUID,
    nookId: UUID
  }, {});
  plant.associate = models => {
    plant.belongsTo(models.nook);
    plant.belongsTo(models.user);
  };
  return plant;
};