const db = require('../models')
const { waterings } = require('./data')

const getRandomId = array =>
  array[Math.floor(Math.random() * array.length)].id

module.exports = {
  up: async () => {
    const plants = await db.plant.findAll()
    const wateringSeeds = waterings.map(watering => {
        return {
            ...watering,
            plantId: getRandomId(plants)
        }
    })
    await db.watering.bulkCreate(wateringSeeds)
  },
  down: queryInterface => queryInterface.bulkDelete('waterings', null, {})
}