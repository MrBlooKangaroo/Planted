// const db = require('../../models');
// const { 
//   cleanUpDb, 
//   createQuery,
//   createTestClient,
//   closeDbConnection, 
// } = require('../../utils/test');
// const { testUser, testPlant, testNook, testPlantType, testWatering } = require('../../utils/seeds/testData')

// afterEach(cleanUpDb);
// afterAll(closeDbConnection);

// describe('Plant Type Resolver', () => {
//   const query = createQuery(
//     __dirname, 
//     '../../utils/queries/plantType.graphql'
//   );

//   it('returns data for the specified plantType', async () => {
//     const { testClient } = await createTestClient();
//     const plantType = await db.plantType.create(testPlantType)
//     const user = await db.user.create(testUser)
//     const nook = await db.nook.create({
//         ...testNook,
//         userId: user.id
//     })
//     const plant = await db.plant.create({
//         ...testPlant,
//         nookId: nook.id,
//         plantTypeId: plantType.id
//     })
//     const variables = { name: plantType.name };
//     const response = await testClient.query({ query, variables });
//     // const responseWatering = response.data.watering;

//     console.log(response)
//     console.log(variables)
//     console.log(plantType.id)
//     // console.log(response.errors[0].extensions)

//     const responsePlantType = response.data.plantType;
//     expect(response.errors).toBe(undefined);
//     expect(responsePlantType).toBeDefined();
//     expect(responsePlantType.name).toBe(testPlantType.name);
//     expect(responsePlantType.description).toBe(testPlantType.description);
//     expect(responsePlantType.instructions).toBe(testPlantType.instructions);
//     expect(responsePlantType.luxLevel).toBe(testPlantType.luxLevel);
//     expect(responsePlantType.waterLevel).toBe(testPlantType.waterLevel);
//     expect(responsePlantType.waterCycle).toBe(testPlantType.waterCycle);
//   });

// //   it('should return NOT_FOUND error if invalid user id supplied', async () => {
// //     const { testClient } = await createTestClient();
// //     const variables = { id: '0b9f38f1-333f-42db-b0c7-3939cab66bc8' };
// //     const response = await testClient.query({ query, variables });
// //     const { errors } = response;
    
// //     expect(errors.length).toBe(1);
// //     expect(errors[0].extensions.code).toBe('NOT_FOUND');
// //   });
// });
