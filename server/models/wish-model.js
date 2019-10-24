module.exports = (sequelize, {
    UUID
  }) => {
    const wish = sequelize.define('wish', {
      userId: UUID,
      plantTypeId: UUID,
      nookId: UUID
    }, {})
    wish.associate = models => {
      wish.belongsTo(models.user)
      wish.belongsTo(models.plantType)
      wish.belongsTo(models.nook) 
    }
    return wish
  }
  