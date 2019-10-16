const { LuxLevel } = require('../utils/enums.ts')

module.exports = (sequelize, {
  UUID, STRING, ENUM
}) => {
  const nook = sequelize.define('nook', {
    name: STRING,
    photoUrl: STRING,
    luxLevel: ENUM([...LuxLevel]),
    userId: UUID, 
  }, {})
  nook.associate = models => {
    nook.belongsTo(models.user)
    nook.hasMany(models.plant)
  }
  return nook
} 