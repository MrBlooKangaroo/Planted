const db = require('../models')
const { plantTypes } = require('./data')

plantTypes.forEach(plantType =>
  Object.assign(plantType, { createdAt: new Date() })
)

module.exports = {
  up: async () => db.plantType.bulkCreate(plantTypes),
  down: queryInterface => queryInterface.bulkDelete('plantTypes', null, {}),
}