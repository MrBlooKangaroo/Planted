const { LuxLevel, WaterLevel, WaterCycle } = require('../utils/enums');

module.exports = (sequelize, { STRING, BOOLEAN, ENUM }) => {
  const plantType = sequelize.define('plantType', {
    name: STRING,
    featuresWeb: STRING,
    instructionsWeb: STRING,
    featuresiOS: STRING,
    instructionsiOS: STRING,
    photoUrl: STRING,
    photoUrlHorizontalCrop: STRING,
    photoUrlVerticalCrop: STRING,
    petToxicity: STRING,
    colorPalette: STRING,
    humidityAdvice: STRING,
    travelAdvice: STRING,
    careAdvice: STRING,
    luxLevelInfo: STRING,
    waterCycleInfo: STRING,
    hasJungleVibes: BOOLEAN,
    isAiryFresh: BOOLEAN,
    isAirPurifying: BOOLEAN,
    luxLevel: ENUM([...LuxLevel]),
    waterLevel: ENUM([...WaterLevel]),
    waterCycle: ENUM([...WaterCycle]),
  });
  plantType.associate = models => {
    plantType.hasMany(models.plant);
    plantType.hasMany(models.wish);
  };
  return plantType;
};
