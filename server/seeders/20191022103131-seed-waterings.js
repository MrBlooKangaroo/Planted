const db = require('../models')
const moment = require('moment')

module.exports = {
  up: async () => {
    let expectedAt
    const plants = await db.plant.findAll()
      plantTypes = await db.plantType.findAll()
      wateringSeeds = plants.map(plant => {
      plantTypes.forEach(plantType => {
        if (plant.plantTypeId === plantType.id) {
          switch(plantType.waterCycle) {
            default:
            case 'WEEKLY': 
              expectedAt = moment().add(1, 'weeks').toISOString()
              break
            case 'BIWEEKLY':
              expectedAt = moment().add(2, 'weeks').toISOString()
              break
            case 'MONTHLY':
              expectedAt = moment().add(1, 'months').toISOString()
              break
          }
        }
      })
      return { expectedAt, plantId: plant.id }
    })
    await db.watering.bulkCreate(wateringSeeds)
  },
  down: queryInterface => queryInterface.bulkDelete('waterings', null, {})
}