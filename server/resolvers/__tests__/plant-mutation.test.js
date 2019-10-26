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
  testPlant
} = require('../../utils/seeds/testData')

afterEach(cleanUpDb)
afterAll(closeDbConnection)

const CREATE_PLANT = gql`
    mutation ($plant: CreatePlantInput!){
        createPlant(input:$plant){
            plant {
                photoUrl
                id
            }
        }
    }
`;

describe('User Resolver', () => {
    it('Response of the mutation returns the data passed by testUser', async () => {
        const { testClient } = await createTestClient();
        const plantType = await db.plantType.create(testPlantType)
        const user = await db.user.create(testUser)
        const nook = await db.nook.create({...testNook, userId: user.id})

        const response = await testClient.mutate({ mutation: CREATE_PLANT, variables: {plant:{
            ...testPlant, 
            nookId: nook.id,
            plantTypeId: plantType.id}} 
        })

        expect(response.data.createPlant.plant.photoUrl).toBe(testPlant.photoUrl)
        expect(response.data.createPlant.plant.id).toBeDefined()
    })
    it('Expected error if nookId isnt passed in', async () => {
        const { testClient } = await createTestClient();
        const plantType = await db.plantType.create(testPlantType)
        const user = await db.user.create(testUser)
        const nook = await db.nook.create({...testNook, userId: user.id})

        const response = await testClient.mutate({ mutation: CREATE_PLANT, variables: {plant:{
            ...testPlant, 
            plantTypeId: plantType.id}} 
        })

        expect(response.errors).toBeDefined()
        expect(response.errors[0].extensions.code).toBe('INTERNAL_SERVER_ERROR')
    })
    it('Expected error if plantType isnt passed in', async () => {
        const { testClient } = await createTestClient();
        const plantType = await db.plantType.create(testPlantType)
        const user = await db.user.create(testUser)
        const nook = await db.nook.create({...testNook, userId: user.id})

        const response = await testClient.mutate({ mutation: CREATE_PLANT, variables: {plant:{
            ...testPlant, 
            nookId: nook.id}} 
        })

        expect(response.errors).toBeDefined()
        expect(response.errors[0].extensions.code).toBe('INTERNAL_SERVER_ERROR')
    })
})