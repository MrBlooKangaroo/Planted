const gql = require('graphql-tag')
const db = require('../../../models')
const { cleanUpDb, createTestClient, closeDbConnection, createQuery } = require('../../../utils/testing')
const {
    testUser,
    testNook,
    testPlantType,
    testPlant
} = require('../../../utils/testing/testData')

afterEach(cleanUpDb)
afterAll(closeDbConnection)

const UPDATE_NOOK = gql`
    mutation ($id: ID!, $input: UpdateNookInput) {
        updateNook(id: $id, input: $input) {
            nook {
                name
                photoUrl
                luxLevel
            }
        }
    }
`


const text = {
    updateName: "New Name",
    updateLuxLevel: "LOW",
    updatePhotoUrl: "newphotourl.svg"
}

describe('Create Plant Mutation Resolver', () => {
    const query = createQuery(
        __dirname,
        '../../../utils/queries/nook.graphql'
    )

    it('should create a plant that has the testPlant data', async () => {
        const { testClient } = await createTestClient()
        const user = await db.user.create(testUser)
        const nook = await db.nook.create({ ...testNook, userId: user.id })
        await testClient.mutate({
            mutation: UPDATE_NOOK,
            variables: {
                id: nook.id,
                input: {
                    name: text.updateName,
                    luxLevel: text.updateLuxLevel,
                    photoUrl: text.updatePhotoUrl
                }
            }
        })

        const updatedNook = await testClient.query({
            query, variables: {
                id: nook.id
            }
        })

        const updatedNookData = updatedNook.data.nook

        expect(updatedNookData).toBeDefined()
        expect(updatedNookData.name).toEqual(text.updateName)
        expect(updatedNookData.luxLevel).toEqual(text.updateLuxLevel)
        expect(updatedNookData.photoUrl).toEqual(text.updatePhotoUrl)
        expect(updatedNookData.id).toEqual(nook.id)
        expect(updatedNookData.user.id).toEqual(user.id)
    })
})