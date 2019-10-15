const { WaterLevel, LuxLevel, WateringFrequency } = require('../utils/enums.ts');

module.exports = (sequelize, {
    STRING, ENUM
}) => {
  const plantType = sequelize.define('plantType', {
    name: STRING,
    description: STRING,
    instructions: STRING,
    features: STRING,
    colors: STRING,
    photoUrl: STRING,
    luxLevel: ENUM([...LuxLevel]),
    waterLevel: ENUM([...WaterLevel]),
    waterCycle: ENUM([...WateringFrequency]),
  }, {});
  plantType.associate = models => {
    plantType.hasMany(models.plant);
  };
  return plantType;
};