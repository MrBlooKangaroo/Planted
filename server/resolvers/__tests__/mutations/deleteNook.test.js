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


const DELETE_NOOK = gql`
    mutation deleteNook($id: ID!) {
        deleteNook(id: $id) {
            nook {
                id
            }
        }
    }
`

describe('Create Plant Mutation Resolver', () => {
    const query = createQuery(
        __dirname,
        '../../../utils/queries/nook.graphql'
    )

    const queryPlant = createQuery(
        __dirname,
        '../../../utils/queries/plant.graphql'
    )

    const queryWatering = createQuery(
        __dirname,
        '../../../utils/queries/watering.graphql'
    )

    it('should not be able to find nook or plant after it has been delted', async () => {
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

        const variables = { id: nook.id }
        const responseNookData = await testClient.query({ query, variables })
        const responseNook = responseNookData.data.nook
        expect(responseNook.id).toEqual(nook.id)

        const response = await testClient.mutate({
            mutation: DELETE_NOOK,
            variables
        })
        const responseNookDelete = response.data.deleteNook.nook
        expect(responseNookDelete.id).toEqual(nook.id)

        const responseNookAfterDeleted = await testClient.query({
            query, variables
        })
        expect(responseNookAfterDeleted.errors[0].extensions.code).toEqual('NOT_FOUND')

        const responsePlantAfterDeleted = await testClient.query({
            query: queryPlant,
            variables: {
                id: plant.id
            }
        })
        expect(responsePlantAfterDeleted.errors[0].extensions.code).toEqual('NOT_FOUND')

        const responseWateringAfterDeleted = await testClient.query({
            query: queryWatering,
            variables: {
                id: watering.id
            }
        })
        expect(responseWateringAfterDeleted.errors[0].extensions.code).toEqual('NOT_FOUND')
    })

})