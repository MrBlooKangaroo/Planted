const gql = require('graphql-tag')
const db = require('../../../models')
const { cleanUpDb, createTestClient, closeDbConnection } = require('../../../utils/testing')
const { 
  testUser,
  testNook,
  testPlantType,
  testPlant
} = require('../../../utils/testing/testData')

afterEach(cleanUpDb)
afterAll(closeDbConnection)

const CREATE_WISH = gql`
    mutation ($wish: CreateWishInput!) {
        createWish(input: $wish) {
            wish {
                id
                user {
                    id
                }
                plantType {
                    id
                }
                nook {
                    id
                }
            }
        }
    }
`

describe('Create Wish Mutation Resolver', () => {
    it('should create a wish that has an id, plantType, plant and nook in response', async () => {
        const { testClient } = await createTestClient()
        const user = await db.user.create(testUser)
        const plantType = await db.plantType.create(testPlantType)
        const nook = await db.nook.create({...testNook, userId: user.id})
        const response = await testClient.mutate({ 
            mutation: CREATE_WISH, 
            variables: { wish: {
                userId: user.id, 
                plantTypeId: plantType.id,
                nookId: nook.id
            }} 
        })
        const userResponse = response.data.createWish.wish.user
        const plantTypeResponse = response.data.createWish.wish.plantType
        const nookResponse = response.data.createWish.wish.nook
        
        expect(response).toBeDefined()
        expect(userResponse.id).toBe(user.id)
        expect(plantTypeResponse.id).toBe(plantType.id)
        expect(nookResponse.id).toBe(nook.id)
    })

    it('should return an error when user id is not passed in', async () => {
        const { testClient } = await createTestClient()
        const user = await db.user.create(testUser)
        const plantType = await db.plantType.create(testPlantType)
        const nook = await db.nook.create({...testNook, userId: user.id})
        const response = await testClient.mutate({ 
            mutation: CREATE_WISH, 
            variables: { wish: {
                userId: null, 
                plantTypeId: plantType.id,
                nookId: nook.id
            }} 
        })

        expect(response.errors).toBeDefined()
        expect(response.errors[0].extensions.code).toBe('INTERNAL_SERVER_ERROR')
    })

    it('should return an error if plantTypeId is not passed in', async () => {
        const { testClient } = await createTestClient()
        const user = await db.user.create(testUser)
        const nook = await db.nook.create({...testNook, userId: user.id})
        const response = await testClient.mutate({ 
            mutation: CREATE_WISH, 
            variables: { wish: {
                userId: user.id, 
                plantTypeId: null,
                nookId: nook.id
            }} 
        })

        expect(response.errors).toBeDefined()
        expect(response.errors[0].extensions.code).toBe('INTERNAL_SERVER_ERROR')
    })

    it('should NOT return an error if nookId is not passed in', async () => {
        const { testClient } = await createTestClient()
        const user = await db.user.create(testUser)
        const plantType = await db.plantType.create(testPlantType)
        const response = await testClient.mutate({ 
            mutation: CREATE_WISH, 
            variables: { wish: {
                userId: user.id, 
                plantTypeId: plantType.id,
                nookId: null
            }} 
        })

        expect(response).toBeDefined()
        expect(response.errors).toBeUndefined()
        expect(response.data.createWish.wish.nook).toBeDefined()
        expect(response.data.createWish.wish.nook).toBe(null)
    })
})