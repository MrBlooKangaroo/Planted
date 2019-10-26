const gql = require('graphql-tag');
const db = require('../../models')
const { 
  cleanUpDb, 
  createQuery,
  createTestClient,
  closeDbConnection
} = require('../../utils/testing')
const { 
  testUser
} = require('../../utils/testing/testData')

afterEach(cleanUpDb)
afterAll(closeDbConnection)

const CREATE_USER = gql`
    mutation ($user: CreateUserInput!){
        createUser(input:$user){
            user{
            id
            firstName
            lastName
            email
            photoUrl
            }
        }
    }
`;

describe('User Resolver', () => {

    it('should return a user with the same information as testUser', async () => {
        const { testClient } = await createTestClient();
    
        const response = await testClient.mutate({ mutation: CREATE_USER, variables: {user:{...testUser}} })
        const responseUser = response.data.createUser.user
    
        expect(response.data.createUser.user).toBeDefined()
        expect(responseUser.firstName).toBe(testUser.firstName)
        expect(responseUser.lastName).toBe(testUser.lastName)
        expect(responseUser.photoUrl).toBe(testUser.photoUrl)
        expect(responseUser.email).toBe(testUser.email)
    
    })

    it('should throw an error if first name is set to null', async () => {
        const { testClient } = await createTestClient();
        const response = await testClient.mutate({ mutation: CREATE_USER, variables: {user:{...testUser, firstName:null}} })

        expect(response.errors).toBeDefined()
        expect(response.errors[0].extensions.code).toBe('INTERNAL_SERVER_ERROR')
    })
})