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


const DELETE_PLANT = gql`
    mutation ($id: ID!) {
        deletePlant(id: $id) {
            plant {
                id
            }
        }
    }
`

describe('Create Plant Mutation Resolver', () => {
    const query = createQuery(
        __dirname,
        '../../../utils/queries/plant.graphql'
    )

    const nookQuery = createQuery(
        __dirname,
        '../../../utils/queries/nook.graphql'
    )

    const wateringQuery = createQuery(
        __dirname,
        '../../../utils/queries/watering.graphql'
    )

    it('should not be able to find plants and waterings after plant is deleted', async () => {
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
        const wateringTwo = await db.watering.create({
            ...testWatering,
            plantId: plant.id
        })

        const variables = { id: plant.id }
        const responsePlantData = await testClient.query({ query, variables })
        const responsePlant = responsePlantData.data.plant
        expect(responsePlant.photoUrl).toBe(testPlant.photoUrl)
        expect(responsePlant.id).toBeDefined()

        const response = await testClient.mutate({
            mutation: DELETE_PLANT,
            variables
        })

        const responsePlantAfterDelete = await testClient.query({ query, variables })
        expect(responsePlantAfterDelete.errors[0].extensions.code).toEqual('NOT_FOUND')


        const responseWateringAfterDelete = await testClient.query({
            query: wateringQuery, variables: {
                id: watering.id
            }
        })
        expect(responseWateringAfterDelete.errors[0].extensions.code).toEqual('NOT_FOUND')


        const responseWateringTwoAfterDelete = await testClient.query({
            query: wateringQuery,
            variables: {
                id: wateringTwo.id
            }
        })
        expect(responseWateringTwoAfterDelete.errors[0].extensions.code).toEqual('NOT_FOUND')
    })

    it('should still show correct nook info after deleting plant', async () => {
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
        const wateringTwo = await db.watering.create({
            ...testWatering,
            plantId: plant.id
        })

        const variables = { id: plant.id }
        const responsePlantData = await testClient.query({ query, variables })
        const responsePlant = responsePlantData.data.plant
        expect(responsePlant.photoUrl).toBe(testPlant.photoUrl)
        expect(responsePlant.id).toBeDefined()

        const response = await testClient.mutate({
            mutation: DELETE_PLANT,
            variables
        })
        const responseData = response.data.deletePlant.plant
        expect(responseData.id).toEqual(plant.id)

        const responseNookData = await testClient.query({
            query: nookQuery,
            variables: {
                id: nook.id
            }
        })

        const responseNook = responseNookData.data.nook
        expect(responseNook).toBeDefined()
        expect(responseNook.name).toBe(testNook.name)
        expect(responseNook.photoUrl).toBe(testNook.photoUrl)
        expect(responseNook.luxLevel).toBe(testNook.luxLevel)

    })
})