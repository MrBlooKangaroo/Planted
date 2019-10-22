const db = require('../index')
const { LuxLevel } = require('../../utils/seeds/enums')
const { cleanUpDb, closeDbConnection } = require('../../utils/test')
const { 
  testUser, 
  testNook,
  testPlant,
  testPlantType
} = require('../../utils/seeds/testData')

afterEach(cleanUpDb)
afterAll(closeDbConnection)

describe('Nook Model', () => {
  describe('validations', () => {

    it('should return all fields in response', async () => {
      const user = await db.user.create(testUser)
      const nook = await db.nook.create({ 
        ...testNook, 
        userId: user.id 
      })
      
      expect(nook).toBeDefined()
      expect(nook.name).toBe('Back Patio')
      expect(nook.luxLevel).toBe('MEDIUM')
      expect(nook.photoUrl).toBe('backpatio.jpg')
      expect(nook.userId).toBe(user.id)
    })
    
    it('should associate a nook with a user', async () => {
      const user = await db.user.create(testUser)
      const nook = await db.nook.create({ 
        ...testNook, 
        userId: user.id 
      })

      const userResponse = await db.user.findOne({
        where: { id: nook.userId }
      })

      expect(userResponse).toBeDefined()
      expect(userResponse.id).toBe(user.id)
      expect(userResponse.nickname).toBe(user.nickname)
      expect(userResponse.firstName).toBe(user.firstName)
      expect(userResponse.lastName).toBe(user.lastName)
      expect(userResponse.photoUrl).toBe(user.photoUrl)
      expect(userResponse.email).toBe(user.email)
    })

    it('should return a list of plants in response', async () => {
      const user = await db.user.create(testUser)
      const plantType = await db.plantType.create(testPlantType)
      const nook = await db.nook.create({ 
        ...testNook, 
        userId: user.id 
      })

      for (let i = 0; i < 9; i++) {
        await db.plant.create({
            ...testPlant,
            nookId: nook.id,
            plantTypeId: plantType.id
        })  
      }

      const plantsInNook = await db.plant.findAll({
        where: { nookId: nook.id }
      })

      expect(plantsInNook).toBeDefined()
      expect(plantsInNook.length).toBe(9)
      expect(plantsInNook[0].nookId).toBe(nook.id)
    })

    it('should require presence of name', async () => {
      const user = await db.user.create(testUser)
      const nook = await db.nook.create({ 
        ...testNook, 
        userId: user.id,
        name: null 
      })
        .catch(({ name: errorName }) => errorName)

      expect(nook).toBe('SequelizeDatabaseError')
    })

    it('should require presence of luxLevel', async () => {
      const nook = await db.nook.create({ ...testNook, luxLevel: null })
        .catch(({ name: errorName }) => errorName)

      expect(nook).toBe('SequelizeDatabaseError')
    })

    it('should only accept allowed LuxLevel values', async () => {
      const user = await db.user.create(testUser)
      const nook = await db.nook.create({ 
        ...testNook, 
        userId: user.id 
      })

      expect(LuxLevel).toContain(nook.luxLevel)
    })
  })
})
