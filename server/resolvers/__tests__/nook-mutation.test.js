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
  testNook
} = require('../../utils/seeds/testData')

afterEach(cleanUpDb)
afterAll(closeDbConnection)

const CREATE_NOOK = gql`
    mutation ($nook: CreateNookInput!){
        createNook(input:$nook){
            nook{
                id
                name
                photoUrl
                luxLevel
            }
        }
    }
`;

describe('Nook Mutation Resolver', () => {
    it('Response of the mutation returns the data passed by testUser', async () => {
        const { testClient } = await createTestClient();
        const user = await db.user.create(testUser)
        const response = await testClient.mutate({ mutation: CREATE_NOOK, variables: {nook:{...testNook, userId: user.id}} })
        const responseNook = response.data.createNook.nook
    
        expect(response.data.createNook.nook).toBeDefined()
        expect(responseNook.name).toBe(testNook.name)
        expect(responseNook.photoUrl).toBe(testNook.photoUrl)
        expect(responseNook.luxLevel).toBe(testNook.luxLevel)
    })

    it('Error should be thrown if name is set to null', async () => {
        const { testClient } = await createTestClient();
        const user = await db.user.create(testUser)
        const response = await testClient.mutate({ mutation: CREATE_NOOK, variables: {nook:{...testNook, userId: user.id, name:null}} })

        expect(response.errors).toBeDefined()
        expect(response.errors[0].extensions.code).toBe('INTERNAL_SERVER_ERROR')
    })

    it('Error should be thrown if a user id isnt set to null', async () => {
        const { testClient } = await createTestClient();
        const response = await testClient.mutate({ mutation: CREATE_NOOK, variables: {nook:{...testNook}} })

        expect(response.errors).toBeDefined()
        expect(response.errors[0].extensions.code).toBe('INTERNAL_SERVER_ERROR')
    })
})