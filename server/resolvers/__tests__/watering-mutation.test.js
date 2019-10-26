const gql = require('graphql-tag');
const db = require('../../models')
const { 
  cleanUpDb, 
  createQuery,
  createTestClient,
  closeDbConnection
} = require('../../utils/test')
const { 
    testUser,
    testNook,
    testPlantType,
    testPlant,
    testWatering
} = require('../../utils/seeds/testData')

afterEach(cleanUpDb)
afterAll(closeDbConnection)

const CREATE_WATERING = gql`
    mutation ($watering: CreateWateringInput!){
        createWatering(input:$watering){
            watering {
                id
                expectedAt
                executedAt
            }
        }
    }
`;

describe('User Resolver', () => {
    it('Response of the mutation returns the data passed by testUser', async () => {
        const { testClient } = await createTestClient()
        const plantType = await db.plantType.create(testPlantType)
        const user = await db.user.create(testUser)
        const nook = await db.nook.create({...testNook, userId: user.id})
        const plant = await db.plant.create({
            ...testPlant,
            nookId: nook.id,
            plantTypeId: plantType.id
        })
        const response = await testClient.mutate({ mutation: CREATE_WATERING, variables: {watering:{
            ...testWatering,
            plantId: plant.id}} 
        })
        
        expect(response.data.createWatering.watering.id).toBeDefined()
        expect(response.data.createWatering.watering.expectedAt).toBe('1995-12-17T08:24:00.000Z')
        expect(response.data.createWatering.watering.executedAt).toBe(null)
    })
    it('Expected error if plantId isnt passed in', async () => {
        const { testClient } = await createTestClient()
        const plantType = await db.plantType.create(testPlantType)
        const user = await db.user.create(testUser)
        const nook = await db.nook.create({...testNook, userId: user.id})
        const plant = await db.plant.create({
            ...testPlant,
            nookId: nook.id,
            plantTypeId: plantType.id
        })
        const response = await testClient.mutate({ mutation: CREATE_WATERING, variables: {watering:{
            ...testWatering }} 
        })

        expect(response.errors).toBeDefined()
        expect(response.errors[0].extensions.code).toBe('INTERNAL_SERVER_ERROR')
    })
    it('Expected error if expectedAt is null', async () => {
        const { testClient } = await createTestClient()
        const plantType = await db.plantType.create(testPlantType)
        const user = await db.user.create(testUser)
        const nook = await db.nook.create({...testNook, userId: user.id})
        const plant = await db.plant.create({
            ...testPlant,
            nookId: nook.id,
            plantTypeId: plantType.id
        })
        const response = await testClient.mutate({ mutation: CREATE_WATERING, variables: {watering:{
            ...testWatering,
            expectedAt: null,
            plantTypeId: plantType.id }} 
        })

        expect(response.errors).toBeDefined()
        expect(response.errors[0].extensions.code).toBe('INTERNAL_SERVER_ERROR')
    })
})