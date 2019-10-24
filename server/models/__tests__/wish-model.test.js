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
    describe('validations', () => {
        it('should return plantId, plantTypeId and nookId in response', async () => {
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

        it('should not let userId to be null', async () => {
            const user = await db.user.create(testUser)
            const plantType = await db.plantType.create(testPlantType)
            const nook = await db.nook.create({ 
                ...testNook, 
                userId: user.id 
            })  
            const wish = await db.wish.create({
                userId: null,
                plantTypeId: plantType.id,
                nookId: nook.id
            })
                .catch(({ name: errorName }) => errorName)

            expect(wish).toBe('SequelizeDatabaseError')
        })


        it('should not let plantTypeId to be null', async () => {
            const user = await db.user.create(testUser)
            const nook = await db.nook.create({ 
                ...testNook, 
                userId: user.id 
            })  
            const wish = await db.wish.create({
                userId: user.id,
                plantTypeId: null,
                nookId: nook.id
            })
                .catch(({ name: errorName }) => errorName)

            expect(wish).toBe('SequelizeDatabaseError')
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

    describe('associations', () => {
        it('should associate a wish with a user', async () => {
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
      
            const wishUser = await wish.getUser()
            
            expect(wishUser).toBeDefined()
            expect(wishUser.id).toBe(user.id)
            expect(wishUser.firstName).toBe(user.firstName)
            expect(wishUser.lastName).toBe(user.lastName)
            expect(wishUser.photoUrl).toBe(user.photoUrl)
            expect(wishUser.email).toBe(user.email)
          })
      
          it('should associate a wish with a plantType', async () => {
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
      
            const wishPlantType = await wish.getPlantType()
            
            expect(wishPlantType).toBeDefined()
            expect(wishPlantType.id).toBe(plantType.id)
            expect(wishPlantType.name).toBe(plantType.name)
            expect(wishPlantType.description).toBe(plantType.description)
            expect(wishPlantType.instructions).toBe(plantType.instructions)
            expect(wishPlantType.photoUrl).toBe(plantType.photoUrl)
            expect(wishPlantType.luxLevel).toBe(plantType.luxLevel)
            expect(wishPlantType.waterLevel).toBe(plantType.waterLevel)
            expect(wishPlantType.waterCycle).toBe(plantType.waterCycle)
            expect(wishPlantType.userId).toBe(plantType.userId)
          })
      
          it('should associate a wish with a nook', async () => {
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
      
            const wishNook = await wish.getNook()
      
            expect(wishNook).toBeDefined()
            expect(wishNook.id).toBe(nook.id)
            expect(wishNook.name).toBe(nook.name)
            expect(wishNook.photoUrl).toBe(nook.photoUrl)
            expect(wishNook.luxLevel).toBe(nook.luxLevel)
            expect(wishNook.userId).toBe(nook.userId)
        })
    })
})
