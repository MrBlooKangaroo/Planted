const { Level } = require('../utils/enums.ts');

module.exports = (sequelize, {
  STRING, ENUM, UUID
}) => {
  const nook = sequelize.define('nook', {
    name: STRING,
    location: STRING,
    photo: STRING,
    luxLevel: ENUM([...Level]),
    userId: UUID, 
  }, {});
  nook.associate = models => {
    nook.belongsTo(models.user);
    nook.hasMany(models.plant);
  };
  return nook;
}; 