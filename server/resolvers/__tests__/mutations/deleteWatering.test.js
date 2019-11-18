const gql = require('graphql-tag')
const db = require('../../../models')
const {
    cleanUpDb,
    createQuery,
    createTestClient,
    closeDbConnection,
} = require('../../../utils/testing')
const {
    testUser,
    testPlant,
    testNook,
    testPlantType,
    testWatering
} = require('../../../utils/testing/testData')

afterEach(cleanUpDb)
afterAll(closeDbConnection)


const DELETE_WATERING = gql`
    mutation ($id: ID!) {
        deleteWatering(id: $id) {
            watering {
                id
            }
        }
    }
`

describe('Create Plant Mutation Resolver', () => {
    const query = createQuery(
        __dirname,
        '../../../utils/queries/watering.graphql'
    )

    it('should not be able to find watering after it has been delted', async () => {
        const { testClient } = await createTestClient()
        const user = await db.user.create(testUser)
        const plantType = await db.plantType.create(testPlantType)
        const nook = await db.nook.create({ ...testNook, userId: user.id })
        const plant = await db.plant.create({
            ...testPlant,
            nookId: nook.id,
            plantTypeId: plantType.id
        })
        const watering = await db.watering.create({
            ...testWatering,
            plantId: plant.id
        })

        const variables = { id: watering.id }
        const responseWateringData = await testClient.query({ query, variables })
        const responseWatering = responseWateringData.data.watering
        expect(responseWatering.id).toEqual(watering.id)

        const response = await testClient.mutate({
            mutation: DELETE_WATERING,
            variables
        })
        const responseWateringDelete = response.data.deleteWatering.watering
        expect(responseWateringDelete.id).toEqual(watering.id)

        const responseWateringAfterDeleted = await testClient.query({
            query, variables: {
                id: watering.id
            }
        })
        expect(responseWateringAfterDeleted.errors[0].extensions.code).toEqual('NOT_FOUND')

    })

})