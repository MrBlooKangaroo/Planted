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
        plantTypeId: plantType.id,
        waterCycle: plantType.waterCycle
      }
    })

    const plantToWaterCycleDict = plantToPlantTypeDict.map(({ plantId, plantTypeId }) => {
      const waterCycle = plantTypeToWaterCycleDict.filter(plantTypeToWaterCycleDef => {
        return plantTypeId === plantTypeToWaterCycleDef.plantTypeId
      })[0].waterCycle
      return {
        plantId,
        waterCycle
      }
    })

    let wateringSeeds = []
    plantToWaterCycleDict.forEach(({ plantId, waterCycle }) => {
      let wateringDate = new Date()
      switch(waterCycle) {
        default:
        case 'WEEKLY': 
          wateringDate = new Date(wateringDate.getTime() + weekInMs)
          break
        case 'BIWEEKLY':
          wateringDate = new Date(wateringDate.getTime() + 2 * weekInMs)
          break
        case 'MONTHLY':
          wateringDate = new Date(wateringDate.getTime() + 4 * weekInMs)
          break
      }
      wateringSeeds.push({
        waterCycle,
        expectedAt: wateringDate.toLocaleDateString(),
        executedAt: null,
        plantId
      })
    })
    await db.watering.bulkCreate(wateringSeeds)
  },
  down: queryInterface => queryInterface.bulkDelete('waterings', null, {})
}