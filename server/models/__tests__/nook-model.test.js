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
    it('should return name, luxLevel, photoUrl and userId in response', async () => {
      const user = await db.user.create(testUser)
      const nook = await db.nook.create({ 
        ...testNook, 
        userId: user.id 
      })
      
      expect(nook).toBeDefined()
      expect(nook.name).toBe(testNook.name)
      expect(nook.luxLevel).toBe(testNook.luxLevel)
      expect(nook.photoUrl).toBe(testNook.photoUrl)
      expect(nook.userId).toBe(user.id)
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

  describe('associations', () => {
    it('should associate a nook with a user', async () => {
      const user = await db.user.create(testUser)
      const nook = await db.nook.create({ 
        ...testNook, 
        userId: user.id 
      })

      const nookUser = await nook.getUser()

      expect(nookUser).toBeDefined()
      expect(nookUser.id).toBe(user.id)
      expect(nookUser.nickname).toBe(user.nickname)
      expect(nookUser.firstName).toBe(user.firstName)
      expect(nookUser.lastName).toBe(user.lastName)
      expect(nookUser.photoUrl).toBe(user.photoUrl)
      expect(nookUser.email).toBe(user.email)
    })

    it('should return a list of plants in response', async () => {
      const user = await db.user.create(testUser)
      const plantType = await db.plantType.create(testPlantType)
      const nook = await db.nook.create({ 
        ...testNook, 
        userId: user.id 
      })

      const plants = new Array(9).map(async _ =>
        await db.plant.create({
          ...testPlant,
          nookId: nook.id,
          plantTypeId: plantType.id
        })
      )
      const plantIds = plants.map(plant => plant.id)
      const nookPlants = await nook.getPlants()
      const nookPlantIds = nookPlants.map(nookPlant => nookPlant.id)

      expect(plantsInNook).toBeDefined()
      expect(plantsInNook.length).toBe(9)
      expect(nookPlantIds).toEqual(expect.arrayContaining(plantIds))
    })
  })
})
