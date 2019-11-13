const db = require("../../../models");
const {
  cleanUpDb,
  createQuery,
  createTestClient,
  closeDbConnection
} = require("../../../utils/testing");
const { testPlantType } = require("../../../utils/testing/testData");

afterEach(cleanUpDb);
afterAll(closeDbConnection);

describe("Suggested PlantTypes Resolver", () => {
  const query = createQuery(
    __dirname,
    "../../../utils/queries/suggestedPlantTypes.graphql"
  );

  it("returns all plantTypes with same luxLevel", async () => {
    const { testClient } = await createTestClient();
    for (let i = 0; i < 4; i++) {
      await db.plantType.create(testPlantType);
    }
    const plantType = await db.plantType.create(testPlantType);
    const variables = { luxInput: plantType.luxLevel };
    const response = await testClient.query({ query, variables });
    const responsePlantTypes = response.data.suggestedPlantTypes;

    expect(response.errors).toBe(undefined);
    expect(responsePlantTypes.length).toBe(5);
    responsePlantTypes.forEach(responsePlantType => {
      expect(responsePlantType).toBeDefined();
      expect(responsePlantType.name).toBe(testPlantType.name);
      expect(responsePlantType.photoUrl).toBe(testPlantType.photoUrl);
    });
  });
});
