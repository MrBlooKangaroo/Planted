const db = require('../../models')
const { 
  cleanUpDb, 
  createQuery,
  createTestClient,
  closeDbConnection, 
} = require('../../utils/test')
const { 
    testUser, 
    testPlant, 
    testNook, 
    testPlantType,
    testWatering
} = require('../../utils/seeds/testData')

afterEach(cleanUpDb)
afterAll(closeDbConnection)

describe('Watering Resolver', () => {
  const query = createQuery(
    __dirname, 
    '../../utils/queries/watering.graphql'
  )

  it('returns data for the specified watering', async () => {
    const { testClient } = await createTestClient()
    const plantType = await db.plantType.create(testPlantType)
    const user = await db.user.create(testUser)
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
    const variables = { id: watering.id }
    const response = await testClient.query({ query, variables })
    const responseWatering = response.data.watering

    expect(responseWatering).toBeDefined()
    expect(response.errors).toBe(undefined)
    expect(responseWatering).toBeDefined()
    expect(responseWatering.expectedAt).toBe(testWatering.expectedAt.toISOString())
    expect(responseWatering.executedAt).toBeDefined()
  })

  it('should return NOT_FOUND error if invalid user id supplied', async () => {
    const { testClient } = await createTestClient()
    const variables = { id: '0b9f38f1-333f-42db-b0c7-3939cab66bc8' }
    const response = await testClient.query({ query, variables })
    const { errors } = response
    
    expect(errors.length).toBe(1)
    expect(errors[0].extensions.code).toBe('NOT_FOUND')
  })

  it('should have a valid relationship to plant', async () => {
    const { testClient } = await createTestClient()
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
    const variables = { id: watering.id }
    const response = await testClient.query({ query, variables })
    const responseWatering = response.data.watering
    
    expect(responseWatering.plant).toBeDefined()
    expect(responseWatering.plant.id).toBe(plant.id)
  })
})
