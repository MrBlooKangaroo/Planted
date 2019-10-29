const gql = require('graphql-tag')
const db = require('../../../models')
const { cleanUpDb, createTestClient, closeDbConnection } = require('../../../utils/testing')
const { 
  testUser,
  testNook
} = require('../../../utils/testing/testData')

afterEach(cleanUpDb)
afterAll(closeDbConnection)

const CREATE_NOOK = gql`
    mutation ($nook: CreateNookInput!){
        createNook(input: $nook){
            nook{
                id
                name
                photoUrl
                luxLevel
            }
        }
    }
`

describe('Create Nook Mutation Resolver', () => {
    it('should create a nook with the test data', async () => {
        const { testClient } = await createTestClient()
        const user = await db.user.create(testUser)
        const response = await testClient.mutate({ 
            mutation: CREATE_NOOK, 
            variables: { nook: {
                ...testNook, 
                userId: user.id
            }} 
        })
        const responseNook = response.data.createNook.nook
    
        expect(responseNook).toBeDefined()
        expect(responseNook.name).toBe(testNook.name)
        expect(responseNook.photoUrl).toBe(testNook.photoUrl)
        expect(responseNook.luxLevel).toBe(testNook.luxLevel)
    })

    it('should throw an error if the name is set to null', async () => {
        const { testClient } = await createTestClient()
        const user = await db.user.create(testUser)
        const response = await testClient.mutate({ 
            mutation: CREATE_NOOK, 
            variables: { nook: {
                ...testNook, 
                userId: user.id, 
                name: null
            }} 
        })

        expect(response.errors).toBeDefined()
        expect(response.errors[0].extensions.code).toBe('INTERNAL_SERVER_ERROR')
    })

    it('should throw an error if user is not passed in', async () => {
        const { testClient } = await createTestClient()
        const response = await testClient.mutate({ 
            mutation: CREATE_NOOK, 
            variables: { nook: {
                ...testNook
            }} 
        })

        expect(response.errors).toBeDefined()
        expect(response.errors[0].extensions.code).toBe('INTERNAL_SERVER_ERROR')
    })
})