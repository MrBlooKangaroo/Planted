const db = require('../../models');
const { 
  cleanUpDb, 
  createQuery,
  createTestClient,
  closeDbConnection, 
} = require('../../utils/test');
const { testUser, testPlant, testNook, testPlantType } = require('../../utils/seeds/testData')

afterEach(cleanUpDb);
afterAll(closeDbConnection);

describe('Plant Resolver', () => {
  const query = createQuery(
    __dirname, 
    '../../utils/queries/plant.graphql'
  );

  it('returns data for the specified plant', async () => {
    const { testClient } = await createTestClient();
    const user = await db.user.create(testUser)
    const plantType = await db.plantType.create(testPlantType)
    const nook = await db.nook.create({ 
      ...testNook, 
      userId: user.id 
    })
    const plant = await db.plant.create({ 
        ...testPlant, 
        nookId: nook.id,
        plantTypeId: plantType.id
    })
    console.log(plant)
    // console.log(plant.nookId)
    const variables = { id: plant.id };
    const response = await testClient.query({ query, variables });
    // console.log(response)
    const responsePlant = response.data.plant;

    expect(response.errors).toBe(undefined);
    expect(responsePlant).toBeDefined();
    expect(responsePlant.photoUrl).toBe(testPlant.photoUrl);
  });

//   it('should return NOT_FOUND error if invalid plant id supplied', async () => {
//     const { testClient } = await createTestClient();
//     const variables = { id: '0b9f38f1-333f-42db-b0c7-3939cab66bc8' };
//     const response = await testClient.query({ query, variables });
//     const { errors } = response;
    
//     expect(errors.length).toBe(1);
//     expect(errors[0].extensions.code).toBe('NOT_FOUND');
//   });
});
