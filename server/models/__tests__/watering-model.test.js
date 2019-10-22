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
            const watering = await db.watering.create({
                ...testWatering,
                plantId: plant.id
            })  
      
            expect(watering).toBeDefined()
            expect(watering.plantId).toBe(plant.id)
            expect(typeof watering.expectedAt === 'date')
            expect(watering.executedAt).toBe(null)
        })
        
        it('should associate a watering with a plant', async () => {
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

            for (let i = 0; i < 22; i++) {
              await db.watering.create({
                  ...testWatering,
                  plantId: plant.id
              })  
            }
      
            const plantWaterings = await db.watering.findAll({
              where: { plantId: plant.id }
            })
      
            expect(plantWaterings).toBeDefined()
            expect(plantWaterings.length).toBe(22)
            expect(plantWaterings[0].plantId).toBe(plant.id)
        })
    })
  })
  