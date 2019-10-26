const gql = require('graphql-tag');
const db = require('../../models')
const { 
  cleanUpDb, 
  createQuery,
  createTestClient,
  closeDbConnection
} = require('../../utils/testing')
const { 
    testUser,
    testNook,
    testPlantType,
    testPlant,
    testWatering
} = require('../../utils/testing/testData')

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

    it('should return the same information as passed in by testWatering', async () => {
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

        const responseWatering = response.data.createWatering.watering;
        
        expect(responseWatering.id).toBeDefined()
        expect(responseWatering.expectedAt).toBe(testWatering.expectedAt)
        expect(responseWatering.executedAt).toBe(null)
    })

    it('should throw an error if plantId is not passed in', async () => {
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

    it('should throw an error if expected as is null', async () => {
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