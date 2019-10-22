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

    it('should return all fields in response', async () => {
      const plantType = await db.plantType.create(testPlantType)

      expect(plantType).toBeDefined()
      expect(plantType.name).toBe('God\'s Petunia')
      expect(plantType.description).toBe('really cool looking')
      expect(plantType.instructions).toBe('just give em lots of love')
      expect(plantType.photoUrl).toBe('godspetunia.jpg')
      expect(plantType.luxLevel).toBe('HIGH')
      expect(plantType.waterLevel).toBe('MEDIUM')
      expect(plantType.waterCycle).toBe('MONTHLY')
    })

    it('should return a list of plants in response', async () => {
      const user = await db.user.create(testUser)
      const plantType = await db.plantType.create(testPlantType)
      const nook = await db.nook.create({ 
        ...testNook, 
        userId: user.id 
      })

      for (let i = 0; i < 5; i++) {
        await db.plant.create({
            ...testPlant,
            nookId: nook.id,
            plantTypeId: plantType.id
        })  
      }

      const plantsOfPlantType = await db.plant.findAll({
        where: { nookId: nook.id }
      })

      expect(plantsOfPlantType).toBeDefined()
      expect(plantsOfPlantType.length).toBe(5)
      expect(plantsOfPlantType[0].plantTypeId).toBe(plantType.id)
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
})
