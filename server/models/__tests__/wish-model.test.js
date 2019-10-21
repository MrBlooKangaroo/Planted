const db = require('../index')
const { cleanUpDb, closeDbConnection } = require('../../utils/testing')
const { 
    testUser, 
    testNook, 
    testPlantType
} = require('../../utils/testing/testData')

afterEach(cleanUpDb)
afterAll(closeDbConnection)

describe('Wish Model', () => {

    it('should be able to create an instance of a wish', async () => {
        const user = await db.user.create(testUser)
        const plantType = await db.plantType.create(testPlantType)
        const nook = await db.nook.create({ 
            ...testNook, 
            userId: user.id 
        })  
        const wish = await db.wish.create({
            userId: user.id,
            plantTypeId: plantType.id,
            nookId: nook.id
        })
        
        expect(wish).toBeDefined()
        expect(wish.userId).toBe(user.id)
        expect(wish.plantTypeId).toBe(plantType.id)
        expect(wish.nookId).toBe(nook.id)
    })

    it('should allow nookId to be null', async () => {
        const user = await db.user.create(testUser)
        const plantType = await db.plantType.create(testPlantType)
        const wish = await db.wish.create({
            userId: user.id,
            plantTypeId: plantType.id,
            nookId: null
        })
        
        expect(wish).toBeDefined()
        expect(wish.userId).toBe(user.id)
        expect(wish.plantTypeId).toBe(plantType.id)
        expect(wish.nookId).toBe(null)
    })
})
  