const gql = require('graphql-tag');
const db = require('../../models')
const { 
  cleanUpDb, 
  createQuery,
  createTestClient,
  closeDbConnection
} = require('../../utils/test')
const { 
  testUser
} = require('../../utils/seeds/testData')

afterEach(cleanUpDb)
afterAll(closeDbConnection)

const CREATE_USER = gql`
    mutation ($user: CreateUserInput!){
        createUser(input:$user){
            user{
            id
            firstName
            lastName
            nickname
            email
            photoUrl
            }
        }
    }
`;

describe('User Resolver', () => {
    it('Response of the mutation returns the data passed by testUser', async () => {
        const { testClient } = await createTestClient();
    
        const response = await testClient.mutate({ mutation: CREATE_USER, variables: {user:{...testUser}} })
        const responseUser = response.data.createUser.user
    
        expect(response.data.createUser.user).toBeDefined()
        expect(responseUser.firstName).toBe(testUser.firstName)
        expect(responseUser.lastName).toBe(testUser.lastName)
        expect(responseUser.nickname).toBe(testUser.nickname)
        expect(responseUser.photoUrl).toBe(testUser.photoUrl)
        expect(responseUser.email).toBe(testUser.email)
    
    })
    it('Error should be thrown if firstName is set to null', async () => {
        const { testClient } = await createTestClient();
        const response = await testClient.mutate({ mutation: CREATE_USER, variables: {user:{...testUser, firstName:null}} })

        expect(response.errors).toBeDefined()
        expect(response.errors[0].extensions.code).toBe('INTERNAL_SERVER_ERROR')
    })
})