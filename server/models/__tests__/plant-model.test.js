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

    it('should return all fields in response', async () => {
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
      expect(plant.photoUrl).toBe('ladyfingers.jpg')
      expect(plant.nookId).toBe(nook.id)
      expect(plant.plantTypeId).toBe(plantType.id)
    })
    
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

      const nookResponse = await db.nook.findOne({
        where: { id: plant.nookId }
      })
      
      expect(nookResponse).toBeDefined()
      expect(nookResponse.id).toBe(nook.id)
      expect(nookResponse.name).toBe(nook.name)
      expect(nookResponse.photoUrl).toBe(nook.photoUrl)
      expect(nookResponse.luxLevel).toBe(nook.luxLevel)
      expect(nookResponse.userId).toBe(nook.userId)
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

      const plantTypeResponse = await db.plantType.findOne({
        where: { id: plant.plantTypeId }
      })
      
      expect(plantTypeResponse).toBeDefined()
      expect(plantTypeResponse.id).toBe(plantType.id)
      expect(plantTypeResponse.name).toBe(plantType.name)
      expect(plantTypeResponse.description).toBe(plantType.description)
      expect(plantTypeResponse.instructions).toBe(plantType.instructions)
      expect(plantTypeResponse.photoUrl).toBe(plantType.photoUrl)
      expect(plantTypeResponse.luxLevel).toBe(plantType.luxLevel)
      expect(plantTypeResponse.waterLevel).toBe(plantType.waterLevel)
      expect(plantTypeResponse.waterCycle).toBe(plantType.waterCycle)
      expect(plantTypeResponse.userId).toBe(plantType.userId)
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

      for (let i = 0; i < 7; i++) {
        await db.watering.create({
            ...testWatering,
            plantId: plant.id
        })  
      }

      const plantWaterings = await db.watering.findAll({
        where: { plantId: plant.id }
      })

      expect(plantWaterings).toBeDefined()
      expect(plantWaterings.length).toBe(7)
      expect(plantWaterings[0].plantId).toBe(plant.id)
    })
  })
})
