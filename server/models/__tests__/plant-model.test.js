const db = require('../index')
const { cleanUpDb, closeDbConnection } = require('../../utils/test')
const { 
  testUser, 
  testPlant, 
  testNook, 
  testPlantType 
} = require('../../utils/seeds/testData')

afterEach(cleanUpDb)
afterAll(closeDbConnection)

describe('Plant Model', () => {
  describe('validations', () => {

    it('should be able to create a plant', async () => {
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
    })
  })
})
