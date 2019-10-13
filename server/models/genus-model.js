const { Level, Frequency } = require('../utils/enums.ts');

module.exports = (sequelize, {
    STRING, ENUM
}) => {
  const genus = sequelize.define('genus', {
    name: STRING,
    description: STRING,
    instructions: STRING,
    features: STRING,
    colors: STRING,
    photo: STRING,
    luxLevel: ENUM([...Level]),
    waterLevel: ENUM([...Level]),
    waterCycle: ENUM([...Frequency]),
  }, {});
  genus.associate = models => {
    genus.hasMany(models.plant);
  };
  return genus;
};