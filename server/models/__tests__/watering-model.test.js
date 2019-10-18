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

describe('Watering Model', () => {
    describe('validations', () => {
        it('should be able to create an instance of watering', async () => {
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
            const watering = await db.watering.create({
                ...testWatering,
                plantId: plant.id
            })

            expect(watering.expectedAt).toEqual(testWatering.expectedAt)
            expect(watering.plantId).toEqual(plant.id)
        })
    })
  })
  