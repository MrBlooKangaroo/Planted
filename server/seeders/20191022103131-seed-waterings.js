const db = require('../models')
const moment = require('moment')

module.exports = {
  up: async () => {
    const plants = await db.plant.findAll()
    const plantTypes = await db.plantType.findAll()
    const wateringSeeds = plants.map(plant => {
      const waterCycle = plantTypes.find(({ id }) =>
        id === plant.plantTypeId
      ).waterCycle
      switch(waterCycle) {
        case 'WEEKLY': 
          return { 
            expectedAt: moment().add(1, 'weeks').toISOString(),
            plantId: plant.id
          }
        case 'BIWEEKLY':
          return { 
            expectedAt: moment().add(2, 'weeks').toISOString(),
            plantId: plant.id
          }
        case 'MONTHLY':
          return { 
            expectedAt: moment().add(1, 'weeks').toISOString(),
            plantId: plant.id
          }
      }
    })
    await db.watering.bulkCreate(wateringSeeds)
  },
  down: queryInterface => queryInterface.bulkDelete('waterings', null, {})
}