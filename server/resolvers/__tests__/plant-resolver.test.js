const db = require('../../models')
const { 
  cleanUpDb, 
  createQuery,
  createTestClient,
  closeDbConnection, 
} = require('../../utils/testing')
const { 
    testUser, 
    testPlant, 
    testNook, 
    testPlantType,
    testWatering
} = require('../../utils/testing/testData')

afterEach(cleanUpDb)
afterAll(closeDbConnection)

describe('Plant Resolver', () => {
  const query = createQuery(
    __dirname, 
    '../../utils/queries/plant.graphql'
  )

  it('returns data for the specified plant', async () => {
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
    const variables = { id: plant.id }
    const response = await testClient.query({ query, variables })
    const responsePlant = response.data.plant

    expect(response.errors).toBe(undefined)
    expect(responsePlant).toBeDefined()
    expect(responsePlant.photoUrl).toBe(testPlant.photoUrl)
  })

  it('should return NOT_FOUND error if invalid plant id supplied', async () => {
    const { testClient } = await createTestClient()
    const variables = { id: '0b9f38f1-333f-42db-b0c7-3939cab66bc8' }
    const response = await testClient.query({ query, variables })
    const { errors } = response
    
    expect(errors.length).toBe(1)
    expect(errors[0].extensions.code).toBe('NOT_FOUND')
  })

  it('should have a valid relationship to nook', async () => {
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
    const variables = { id: plant.id }
    const response = await testClient.query({ query, variables })
    const responsePlant = response.data.plant
    
    expect(responsePlant.nook).toBeDefined()
    expect(responsePlant.nook.id).toBe(nook.id)
  })

  it('should have a valid relationship to plantType', async () => {
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
    const variables = { id: plant.id }
    const response = await testClient.query({ query, variables })
    const responsePlant = response.data.plant
    
    expect(responsePlant.plantType).toBeDefined()
    expect(responsePlant.plantType.id).toBe(plantType.id)
  })

  it('should have a valid relationship to waterings', async () => {
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
    await db.watering.create({
      ...testWatering,
      plantId: plant.id
    })
    const variables = { id: plant.id }
    const response = await testClient.query({ query, variables })
    const responsePlant = response.data.plant
    
    expect(responsePlant.waterings).toBeDefined()
    expect(responsePlant.waterings.length).toBe(1)
  })
})
