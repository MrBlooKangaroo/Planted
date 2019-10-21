const db = require('../models')
const { plants } = require('./data')

const getRandomId = array =>
    array[Math.floor(Math.random() * array.length)].id

module.exports = {
  up: async () => {
    const nooks = await db.nook.findAll()
    const plantTypes = await db.plantTypes.findAll()
    const plantSeeds = plants.forEach(plant => {
        return {
            ...plant,
            nookId: getRandomId(nooks),
            plantTypeId: getRandomId(plantTypes)
        }
    })
    db.plant.bulkCreate(plantSeeds)
  },
  down: queryInterface => queryInterface.bulkDelete('plants', null, {}),
}