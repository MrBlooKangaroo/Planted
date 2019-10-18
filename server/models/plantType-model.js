const { 
  LuxLevel, 
  WaterLevel,
  WaterCycle
} = require('../utils/seeds/enums.ts')

module.exports = (sequelize, {
    STRING, ENUM
}) => {
  const plantType = sequelize.define('plantType', {
    name: STRING,
    description: STRING,
    instructions: STRING,
    photoUrl: STRING,
    luxLevel: ENUM([...LuxLevel]),
    waterLevel: ENUM([...WaterLevel]),
    waterCycle: ENUM([...WaterCycle]),
  }, {})
  plantType.associate = models => {
    plantType.hasMany(models.plant)
    plantType.hasMany(models.wish)
  }
  return plantType
}
