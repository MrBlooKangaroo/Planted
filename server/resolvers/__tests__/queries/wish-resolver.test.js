const db = require('../../../models')
const { 
  cleanUpDb, 
  createQuery,
  createTestClient,
  closeDbConnection, 
} = require('../../../utils/testing')
const { 
    testUser, 
    testNook, 
    testPlantType
} = require('../../../utils/testing/testData')

afterEach(cleanUpDb)
afterAll(closeDbConnection)

describe('Wish Resolver', () => {
  const query = createQuery(
    __dirname, 
    '../../../utils/queries/wish.graphql'
  )

  it('returns data for the specified wish', async () => {
    const { testClient } = await createTestClient()
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
    const variables = { id: wish.id }
    const response = await testClient.query({ query, variables })
    const responseWish = response.data.wish

    expect(response.errors).toBe(undefined)
    expect(responseWish).toBeDefined()
    expect(responseWish.user.id).toBe(user.id)
    expect(responseWish.plantType.id).toBe(plantType.id)
    expect(responseWish.nook.id).toBe(nook.id)
  })

  it('should return NOT_FOUND error if invalid wish id supplied', async () => {
    const { testClient } = await createTestClient()
    const variables = { id: '0b9f38f1-333f-42db-b0c7-3939cab66bc8' }
    const response = await testClient.query({ query, variables })
    const { errors } = response
    
    expect(errors.length).toBe(1)
    expect(errors[0].extensions.code).toBe('NOT_FOUND')
  })

  it('should include associated user in the response', async () => {
    const { testClient } = await createTestClient()
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
    const variables = { id: wish.id }
    const response = await testClient.query({ query, variables })
    const responseWish = response.data.wish
    
    expect(responseWish.user).toBeDefined()
    expect(responseWish.user.id).toBe(user.id)
  })

  it('should include associated plantType in the response', async () => {
    const { testClient } = await createTestClient()
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
    const variables = { id: wish.id }
    const response = await testClient.query({ query, variables })
    const responseWish = response.data.wish
    
    expect(responseWish.plantType).toBeDefined()
    expect(responseWish.plantType.id).toBe(plantType.id)
  })

  it('should include associated nook in the response', async () => {
    const { testClient } = await createTestClient()
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
    const variables = { id: wish.id }
    const response = await testClient.query({ query, variables })
    const responseWish = response.data.wish
    
    expect(responseWish.nook).toBeDefined()
    expect(responseWish.nook.id).toBe(nook.id)
  })

  it('should allow nook to be null', async () => {
    const { testClient } = await createTestClient()
    const user = await db.user.create(testUser)
    const plantType = await db.plantType.create(testPlantType)
    const nook = await db.nook.create({ 
      ...testNook, 
      userId: user.id 
    })
    const wish = await db.wish.create({ 
        userId: user.id,
        plantTypeId: plantType.id,
        nookId: null
    })
    const variables = { id: wish.id }
    const response = await testClient.query({ query, variables })
    const responseWish = response.data.wish
    
    expect(responseWish.nook).toBeDefined()
    expect(responseWish.nook).toBe(null)
  })
})
