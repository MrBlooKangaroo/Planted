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
  testPlant
} = require('../../utils/testing/testData')

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

    it('should create a plant that has the testPlant data', async () => {
        const { testClient } = await createTestClient();
        const plantType = await db.plantType.create(testPlantType)
        const user = await db.user.create(testUser)
        const nook = await db.nook.create({...testNook, userId: user.id})

        const response = await testClient.mutate({ mutation: CREATE_PLANT, variables: {plant:{
            ...testPlant, 
            nookId: nook.id,
            plantTypeId: plantType.id}} 
        })

        const plantResponse = response.data.createPlant.plant;
        
        expect(plantResponse.photoUrl).toBe(testPlant.photoUrl)
        expect(plantResponse.id).toBeDefined()
    })

    it('should return an error when nook id is not passed in', async () => {
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

    it('should return an error if plantTypeId is not passed in', async () => {
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