const db = require('../index')
const { cleanUpDb, closeDbConnection } = require('../../utils/test')
const { 
  testUser, 
  testPlant, 
  testNook, 
  testPlantType,
  testWatering
} = require('../../utils/seeds/testData')

afterEach(cleanUpDb)
afterAll(closeDbConnection)

describe('Plant Model', () => {
  describe('validations', () => {
    it('should return photoUrl, nookId and plantTypeId in response', async () => {
      const user = await db.user.create(testUser)
      const plantType = await db.plantType.create(testPlantType)
      const nook = await db.nook.create({ 
        ...testNook, 
        userId: user.id 
      })
      const plant = await db.plant.create({ 
          ...testPlant, 
          nookId: nook.id,
          plantTypeId: plantType.id
      })

      expect(plant).toBeDefined()
      expect(plant.photoUrl).toBe(testPlant.photoUrl)
      expect(plant.nookId).toBe(nook.id)
      expect(plant.plantTypeId).toBe(plantType.id)
    })
  })

  describe('associations', () => {
    it('should associate a plant with a nook', async () => {
      const user = await db.user.create(testUser)
      const plantType = await db.plantType.create(testPlantType)
      const nook = await db.nook.create({ 
        ...testNook, 
        userId: user.id 
      })
      const plant = await db.plant.create({ 
        ...testPlant, 
        nookId: nook.id,
        plantTypeId: plantType.id
      })

      const plantNook = await plant.getNook()
      
      expect(plantNook).toBeDefined()
      expect(plantNook.id).toBe(nook.id)
      expect(plantNook.name).toBe(nook.name)
      expect(plantNook.photoUrl).toBe(nook.photoUrl)
      expect(plantNook.luxLevel).toBe(nook.luxLevel)
      expect(plantNook.userId).toBe(nook.userId)
    })

    it('should associate a plant with a plantType', async () => {
      const user = await db.user.create(testUser)
      const plantType = await db.plantType.create(testPlantType)
      const nook = await db.nook.create({ 
        ...testNook, 
        userId: user.id 
      })
      const plant = await db.plant.create({ 
        ...testPlant, 
        nookId: nook.id,
        plantTypeId: plantType.id
      })

      const plantPlantType = await plant.getPlantType()
      
      expect(plantPlantType).toBeDefined()
      expect(plantPlantType.id).toBe(plantType.id)
      expect(plantPlantType.name).toBe(plantType.name)
      expect(plantPlantType.description).toBe(plantType.description)
      expect(plantPlantType.instructions).toBe(plantType.instructions)
      expect(plantPlantType.photoUrl).toBe(plantType.photoUrl)
      expect(plantPlantType.luxLevel).toBe(plantType.luxLevel)
      expect(plantPlantType.waterLevel).toBe(plantType.waterLevel)
      expect(plantPlantType.waterCycle).toBe(plantType.waterCycle)
      expect(plantPlantType.userId).toBe(plantType.userId)
    })

    it('should return a list of waterings in response', async () => {
      const user = await db.user.create(testUser)
      const plantType = await db.plantType.create(testPlantType)
      const nook = await db.nook.create({ 
          ...testNook, 
          userId: user.id 
      })
      const plant = await db.plant.create({ 
          ...testPlant, 
          nookId: nook.id,
          plantTypeId: plantType.id
      })

      const waterings = new Array(13).map(async _ =>
        await db.plant.create({
          ...testPlant,
          nookId: nook.id,
          plantTypeId: plantType.id
        })
      )
      const wateringIds = waterings.map(watering => watering.id)
      const plantWaterings = await plant.getWaterings()
      const plantWateringIds = plantWaterings.map(plantWatering => plantWatering.id)

      expect(plantWaterings).toBeDefined()
      expect(plantWaterings.length).toBe(13)
      expect(plantWateringIds).toEqual(expect.arrayContaining(wateringIds))
    })
  })
})
