const db = require('../models')

const weekInMs = 7 * 24 * 60 * 60 * 1000

module.exports = {
  up: async () => {
    const plants = await db.plant.findAll()
    const plantTypes = await db.plantType.findAll()

    const plantToPlantTypeDict = plants.map(plant => {
      return {
        plantId: plant.id,
        plantTypeId: plant.plantTypeId
      }
    })

    const plantTypeToWaterCycleDict = plantTypes.map(plantType => {
      return {
        waterCycle: plantType.waterCycle,
        plantTypeId: plantType.id
      }
    })

    const plantToWaterCycleDict = plantToPlantTypeDict.map(({ plantId, plantTypeId }) => {
      const waterCycle = plantTypeToWaterCycleDict.filter(plantTypeToWaterCycleDef => {
        return plantTypeId === plantTypeToWaterCycleDef.plantTypeId
      })[0].waterCycle
      return {
        waterCycle,
        plantId
      }
    })

    let wateringSeeds = []
    plantToWaterCycleDict.forEach(({ plantId, waterCycle }) => {
      let expectedAt = new Date()
      switch(waterCycle) {
        default:
        case 'WEEKLY': 
          expectedAt = new Date(expectedAt.getTime() + weekInMs)
          break
        case 'BIWEEKLY':
          expectedAt = new Date(expectedAt.getTime() + 2 * weekInMs)
          break
        case 'MONTHLY':
          expectedAt = new Date(expectedAt.getTime() + 4 * weekInMs)
          break
      }
      wateringSeeds.push({
        expectedAt,
        waterCycle,
        plantId
      })
    })

    await db.watering.bulkCreate(wateringSeeds)
  },
  down: queryInterface => queryInterface.bulkDelete('waterings', null, {})
}