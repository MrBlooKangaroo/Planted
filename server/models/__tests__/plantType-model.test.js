const db = require('../index')
const { LuxLevel, WaterCycle } = require('../../utils/seeds/enums')
const { cleanUpDb, closeDbConnection } = require('../../utils/test')
const { 
  testUser, 
  testNook,
  testPlant,
  testPlantType
} = require('../../utils/seeds/testData')

afterEach(cleanUpDb)
afterAll(closeDbConnection)

describe('Plant Type Model', () => {
  describe('validations', () => {
    it('should return name, description, instructions, photoUrl, luxLevel, waterLevel and waterCycle in response', async () => {
      const plantType = await db.plantType.create(testPlantType)

      expect(plantType).toBeDefined()
      expect(plantType.name).toBe(testPlantType.name)
      expect(plantType.description).toBe(testPlantType.description)
      expect(plantType.instructions).toBe(testPlantType.instructions)
      expect(plantType.photoUrl).toBe(testPlantType.photoUrl)
      expect(plantType.luxLevel).toBe(testPlantType.luxLevel)
      expect(plantType.waterLevel).toBe(testPlantType.waterLevel)
      expect(plantType.waterCycle).toBe(testPlantType.waterCycle)
    })

    it('should require presence of name', async () => {
      const plantType = await db.plantType.create({ ...testPlantType, name: null })
        .catch(({ name: errorName }) => errorName)

      expect(plantType).toBe('SequelizeDatabaseError')
    })
    
    it('should require presence of description', async () => {
      const plantType = await db.plantType.create({ ...testPlantType, description: null })
        .catch(({ name: errorName }) => errorName)

      expect(plantType).toBe('SequelizeDatabaseError')
    })

    it('should require presence of instructions', async () => {
      const plantType = await db.plantType.create({ ...testPlantType, instructions: null })
        .catch(({ name: errorName }) => errorName)

      expect(plantType).toBe('SequelizeDatabaseError')
    })

    it('should require presence of photoUrl', async () => {
      const plantType = await db.plantType.create({ ...testPlantType, photoUrl: null })
        .catch(({ name: errorName }) => errorName)

      expect(plantType).toBe('SequelizeDatabaseError')
    })

    it('should require presence of luxLevel', async () => {
      const plantType = await db.plantType.create({ ...testPlantType, luxLevel: null })
        .catch(({ name: errorName }) => errorName)

      expect(plantType).toBe('SequelizeDatabaseError')
    })

    it('should require presence of waterLevel', async () => {
      const plantType = await db.plantType.create({ ...testPlantType, waterLevel: null })
        .catch(({ name: errorName }) => errorName)

      expect(plantType).toBe('SequelizeDatabaseError')
    })

    it('should require presence of waterCycle', async () => {
      const plantType = await db.plantType.create({ ...testPlantType, waterCycle: null })
        .catch(({ name: errorName }) => errorName)

      expect(plantType).toBe('SequelizeDatabaseError')
    })

    it('should only accept allowed WaterCycle values', async () => {
      const plantType = await db.plantType.create({...testPlantType})
  
      expect(WaterCycle).toContain(plantType.waterCycle)
    })

    it('should only accept allowed Level values', async () => {
      const plantType = await db.plantType.create({...testPlantType})

      expect(LuxLevel).toContain(plantType.luxLevel)
      expect(LuxLevel).toContain(plantType.waterLevel)
    })
  })

  describe('associations', () => {
    it('should return a list of plants in response', async () => {
      const user = await db.user.create(testUser)
      const plantType = await db.plantType.create(testPlantType)
      const nook = await db.nook.create({ 
          ...testNook, 
          userId: user.id 
      })

      const plants = new Array(7).map(async _ =>
        await db.plant.create({
          ...testPlant,
          nookId: nook.id,
          plantTypeId: plantType.id
        })
      )
      const plantIds = plants.map(plant => plant.id)
      const plantTypePlants = await plantType.getPlants()
      const plantTypePlantIds = plantTypePlants.map(plant => plant.id)

      expect(plantTypePlants).toBeDefined()
      expect(plantTypePlants.length).toBe(7)
      expect(plantTypePlantIds).toEqual(expect.arrayContaining(plantIds))
    })
  })
})
