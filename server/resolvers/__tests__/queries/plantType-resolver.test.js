const db = require("../../../models");
const {
  cleanUpDb,
  createQuery,
  createTestClient,
  closeDbConnection
} = require("../../../utils/testing");
const {
  testUser,
  testPlant,
  testNook,
  testPlantType,
  testPlantTypeAlt1,
  testPlantTypeAlt2
} = require("../../../utils/testing/testData");

afterEach(cleanUpDb);
afterAll(closeDbConnection);

describe("Plant Type Resolver", () => {
  describe("when no luxLevel is passed in", () => {
    const query = createQuery(
      __dirname,
      "../../../utils/queries/plantType.graphql"
    );

    it("returns data for the specified plantType", async () => {
      const { testClient } = await createTestClient();
      const plantType = await db.plantType.create(testPlantType);
      const variables = { id: plantType.id };
      const response = await testClient.query({ query, variables });
      const responsePlantType = response.data.plantType;

      expect(response.errors).toBe(undefined);
      expect(responsePlantType).toBeDefined();
      expect(responsePlantType.name).toBe(testPlantType.name);
      expect(responsePlantType.photoUrl).toBe(testPlantType.photoUrl);
      expect(responsePlantType.photoUrlHorizontalCrop).toBe(
        testPlantType.photoUrlHorizontalCrop
      );
      expect(responsePlantType.photoUrlVerticalCrop).toBe(
        testPlantType.photoUrlVerticalCrop
      );
      expect(responsePlantType.featuresWeb).toBe(testPlantType.featuresWeb);
      expect(responsePlantType.instructionsWeb).toBe(
        testPlantType.instructionsWeb
      );
      expect(responsePlantType.featuresiOS).toBe(testPlantType.featuresiOS);
      expect(responsePlantType.instructionsiOS).toBe(
        testPlantType.instructionsiOS
      );
      expect(responsePlantType.petToxicity).toBe(testPlantType.petToxicity);
      expect(responsePlantType.colorPalette).toBe(testPlantType.colorPalette);
      expect(responsePlantType.humidityAdvice).toBe(
        testPlantType.humidityAdvice
      );
      expect(responsePlantType.travelAdvice).toBe(testPlantType.travelAdvice);
      expect(responsePlantType.careAdvice).toBe(testPlantType.careAdvice);
      expect(responsePlantType.luxLevelInfo).toBe(testPlantType.luxLevelInfo);
      expect(responsePlantType.waterCycleInfo).toBe(
        testPlantType.waterCycleInfo
      );
      expect(responsePlantType.hasJungleVibes).toBe(
        testPlantType.hasJungleVibes
      );
      expect(responsePlantType.isAiryFresh).toBe(testPlantType.isAiryFresh);
      expect(responsePlantType.isAirPurifying).toBe(
        testPlantType.isAirPurifying
      );
      expect(responsePlantType.luxLevel).toBe(testPlantType.luxLevel);
      expect(responsePlantType.waterLevel).toBe(testPlantType.waterLevel);
      expect(responsePlantType.waterCycle).toBe(testPlantType.waterCycle);
    });

    it("should return NOT_FOUND error if invalid plantType id supplied", async () => {
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
      const variables = { id: plantType.id };
      const response = await testClient.query({ query, variables });
      const responsePlantType = response.data.plantType;

      expect(responsePlantType.plants).toBeDefined();
      expect(responsePlantType.plants.length).toBe(1);
    });
  });

  describe("when a luxLevel variable is passed in", () => {
    const query = createQuery(
      __dirname,
      "../../../utils/queries/getPlantTypeSuggestions.graphql"
    );

    it("returns all plantTypes that have the same luxLevel", async () => {
      const { testClient } = await createTestClient();
      [testPlantType, testPlantTypeAlt1, testPlantTypeAlt2].forEach(
        async testSeed => {
          const { luxLevel } = await db.plantType.create(testSeed);
          const variables = { luxLevel };
          const response = await testClient.query({ query, variables });
          const responsePlantTypes = response.data.plantTypes;
          expect(response.errors).toBe(undefined);
          switch (luxLevel) {
            case "HIGH":
              expect(responsePlantTypes.length).toBe(1);
              break;
            default:
            case "MEDIUM":
              expect(responsePlantTypes.length).toBe(1);
              break;
            case "LOW":
              expect(responsePlantTypes.length).toBe(1);
              break;
          }
          responsePlantTypes.forEach(responsePlantType => {
            expect(responsePlantType.luxLevel).toBe(testSeed.luxLevel);
          });
        }
      );
    });
  });
});
