const { LuxLevel } = require('../utils/enums');

module.exports = (sequelize, { UUID, STRING, ENUM }) => {
  const nook = sequelize.define(
    'nook',
    {
      name: STRING,
      photoUrl: STRING,
      luxLevel: ENUM([...LuxLevel]),
      userId: UUID,
    },
    {}
  );
  nook.associate = models => {
    nook.belongsTo(models.user);
    nook.hasMany(models.plant);
    nook.hasMany(models.wish);
  };
  return nook;
};
