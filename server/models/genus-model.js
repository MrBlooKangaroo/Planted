const { Level, Frequency } = require('../utils/enums.ts');

module.exports = (sequelize, {
    STRING, ENUM
}) => {
  const genus = sequelize.define('genus', {
    nickname: STRING,
    nomenclature: STRING,
    description: STRING,
    instructions: STRING,
    photo: STRING,
    luxPreferred: ENUM([...Level]),
    wateringCycle: ENUM([...Frequency]),
  }, {});
  genus.associate = models => {
    genus.hasMany(models.plant);
  };
  return genus;
};