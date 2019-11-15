const db = require("../../../models");
const {
  cleanUpDb,
  createQuery,
  createTestClient,
  closeDbConnection
} = require("../../../utils/testing");
const {
  testUser,
  testNook,
  testPlant,
  testPlantType
} = require("../../../utils/testing/testData");

afterEach(cleanUpDb);
afterAll(closeDbConnection);

describe("Nook Resolver", () => {
  describe("when no arguments are passed in", () => {
    const query = createQuery(__dirname, "../../../utils/queries/nook.graphql");

    it("should return data for the specified nook", async () => {
      const { testClient } = await createTestClient();
      const user = await db.user.create(testUser);
      const nook = await db.nook.create({
        ...testNook,
        userId: user.id
      });
      const variables = { id: nook.id };
      const response = await testClient.query({ query, variables });
      const responseNook = response.data.nook;

      expect(response.errors).toBe(undefined);
      expect(responseNook).toBeDefined();
      expect(responseNook.user).toBeDefined();
      expect(responseNook.name).toBe(testNook.name);
      expect(responseNook.photoUrl).toBe(testNook.photoUrl);
      expect(responseNook.luxLevel).toBe(testNook.luxLevel);
    });

    it("should return NOT_FOUND error if invalid nook id supplied", async () => {
      const { testClient } = await createTestClient();
      const variables = { id: "0b9f38f1-333f-42db-b0c7-3939cab66bc8" };
      const response = await testClient.query({ query, variables });
      const { errors } = response;

      expect(errors.length).toBe(1);
      expect(errors[0].extensions.code).toBe("NOT_FOUND");
    });

    it("should include associated plants in the response", async () => {
      const { testClient } = await createTestClient();
      const user = await db.user.create(testUser);
      const plantType = await db.plantType.create(testPlantType);
      const nook = await db.nook.create({
        ...testNook,
        userId: user.id
      });
      await db.plant.create({
        ...testPlant,
        nookId: nook.id,
        plantTypeId: plantType.id
      });
      const variables = { id: nook.id };
      const response = await testClient.query({ query, variables });
      const responseNook = response.data.nook;

      expect(responseNook.plants).toBeDefined();
      expect(responseNook.plants.length).toBe(1);
    });

    it("should include associated user in the response", async () => {
      const { testClient } = await createTestClient();
      const user = await db.user.create(testUser);
      const nook = await db.nook.create({
        ...testNook,
        userId: user.id
      });
      const variables = { id: nook.id };
      const response = await testClient.query({ query, variables });
      const responseNook = response.data.nook;

      expect(responseNook.user).toBeDefined();
      expect(responseNook.user.id).toBe(user.id);
    });
  });

  describe("when userId argument is passed in", () => {
    const query = createQuery(
      __dirname,
      "../../../utils/queries/getNooksByUserId.graphql"
    );

    it("should return all nooks owned by that user", async () => {
      const { testClient } = await createTestClient();
      const user = await db.user.create(testUser);
      for (let i = 0; i < 5; i++) {
        await db.nook.create({
          ...testNook,
          userId: user.id
        });
      }
      const variables = { userId: user.id };
      const response = await testClient.query({ query, variables });
      const responseNooks = response.data.nooks;

      expect(response.errors).toBe(undefined);
      expect(responseNooks).toBeDefined();
      expect(responseNooks.length).toBe(5);
      responseNooks.forEach(async responseNook => {
        expect(responseNook.user.id).toBe(user.id);
      });
    });
  });
});
