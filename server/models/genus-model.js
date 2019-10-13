const { Level, Frequency } = require('../utils/enums.ts');

module.exports = (sequelize, {
    STRING, ENUM
}) => {
  const genus = sequelize.define('genus', {
    nickname: STRING,
    nomenclature: STRING,
    description: STRING,
    instructions: STRING,
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