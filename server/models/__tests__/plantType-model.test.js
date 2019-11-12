const db = require('../index');
const { LuxLevel, WaterLevel, WaterCycle } = require('../../utils/enums');
const { cleanUpDb, closeDbConnection } = require('../../utils/testing');
const { testUser, testNook, testPlant, testPlantType } = require('../../utils/testing/testData');

afterEach(cleanUpDb);
afterAll(closeDbConnection);

describe('Plant Type Model', () => {
  describe('validations', () => {
    it('should return all 21 fields in response', async () => {
      const plantType = await db.plantType.create(testPlantType);

      expect(plantType).toBeDefined();
      expect(plantType.name).toBe(testPlantType.name);
      expect(plantType.photoUrl).toBe(testPlantType.photoUrl);
      expect(plantType.photoUrlHorizontalCrop).toBe(testPlantType.photoUrlHorizontalCrop);
      expect(plantType.photoUrlVerticalCrop).toBe(testPlantType.photoUrlVerticalCrop);
      expect(plantType.featuresWeb).toBe(testPlantType.featuresWeb);
      expect(plantType.instructionsWeb).toBe(testPlantType.instructionsWeb);
      expect(plantType.featuresiOS).toBe(testPlantType.featuresiOS);
      expect(plantType.instructionsiOS).toBe(testPlantType.instructionsiOS);
      expect(plantType.petToxicity).toBe(testPlantType.petToxicity);
      expect(plantType.colorPalette).toBe(testPlantType.colorPalette);
      expect(plantType.humidityAdvice).toBe(testPlantType.humidityAdvice);
      expect(plantType.travelAdvice).toBe(testPlantType.travelAdvice);
      expect(plantType.careAdvice).toBe(testPlantType.careAdvice);
      expect(plantType.luxLevelInfo).toBe(testPlantType.luxLevelInfo);
      expect(plantType.waterCycleInfo).toBe(testPlantType.waterCycleInfo);
      expect(plantType.hasJungleVibes).toBe(testPlantType.hasJungleVibes);
      expect(plantType.isAiryFresh).toBe(testPlantType.isAiryFresh);
      expect(plantType.isAirPurifying).toBe(testPlantType.isAirPurifying);
      expect(plantType.luxLevel).toBe(testPlantType.luxLevel);
      expect(plantType.waterLevel).toBe(testPlantType.waterLevel);
      expect(plantType.waterCycle).toBe(testPlantType.waterCycle);
    });

    it('should require presence of name', async () => {
      const plantType = await db.plantType
        .create({ ...testPlantType, name: null })
        .catch(({ name: errorName }) => errorName);
      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should require presence of photoUrl', async () => {
      const plantType = await db.plantType
        .create({ ...testPlantType, photoUrl: null })
        .catch(({ name: errorName }) => errorName);
      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should require presence of photoUrlHorizontalCrop', async () => {
      const plantType = await db.plantType
        .create({ ...testPlantType, photoUrlHorizontalCrop: null })
        .catch(({ name: errorName }) => errorName);
      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should require presence of photoUrlVerticalCrop', async () => {
      const plantType = await db.plantType
        .create({ ...testPlantType, photoUrlVerticalCrop: null })
        .catch(({ name: errorName }) => errorName);
      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should require presence of petToxicity', async () => {
      const plantType = await db.plantType
        .create({ ...testPlantType, petToxicity: null })
        .catch(({ name: errorName }) => errorName);
      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should require presence of colorPalette', async () => {
      const plantType = await db.plantType
        .create({ ...testPlantType, colorPalette: null })
        .catch(({ name: errorName }) => errorName);
      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should require presence of humidityAdvice', async () => {
      const plantType = await db.plantType
        .create({ ...testPlantType, humidityAdvice: null })
        .catch(({ name: errorName }) => errorName);
      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should require presence of travelAdvice', async () => {
      const plantType = await db.plantType
        .create({ ...testPlantType, travelAdvice: null })
        .catch(({ name: errorName }) => errorName);
      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should require presence of careAdvice', async () => {
      const plantType = await db.plantType
        .create({ ...testPlantType, careAdvice: null })
        .catch(({ name: errorName }) => errorName);
      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should require presence of luxLevelInfo', async () => {
      const plantType = await db.plantType
        .create({ ...testPlantType, luxLevelInfo: null })
        .catch(({ name: errorName }) => errorName);
      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should require presence of waterCycleInfo', async () => {
      const plantType = await db.plantType
        .create({ ...testPlantType, waterCycleInfo: null })
        .catch(({ name: errorName }) => errorName);
      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should require presence of hasJungleVibes', async () => {
      const plantType = await db.plantType
        .create({ ...testPlantType, hasJungleVibes: null })
        .catch(({ name: errorName }) => errorName);
      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should require presence of isAiryFresh', async () => {
      const plantType = await db.plantType
        .create({ ...testPlantType, isAiryFresh: null })
        .catch(({ name: errorName }) => errorName);
      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should require presence of isAirPurifying', async () => {
      const plantType = await db.plantType
        .create({ ...testPlantType, isAirPurifying: null })
        .catch(({ name: errorName }) => errorName);
      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should require presence of luxLevel', async () => {
      const plantType = await db.plantType
        .create({ ...testPlantType, luxLevel: null })
        .catch(({ name: errorName }) => errorName);
      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should require presence of waterLevel', async () => {
      const plantType = await db.plantType
        .create({ ...testPlantType, waterLevel: null })
        .catch(({ name: errorName }) => errorName);
      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should require presence of waterCycle', async () => {
      const plantType = await db.plantType
        .create({ ...testPlantType, waterCycle: null })
        .catch(({ name: errorName }) => errorName);
      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should only accept allowed LuxLevel values', async () => {
      const plantType = await db.plantType.create({ ...testPlantType });
      expect(LuxLevel).toContain(plantType.luxLevel);
    });

    it('should only accept allowed WaterLevel values', async () => {
      const plantType = await db.plantType.create({ ...testPlantType });
      expect(WaterLevel).toContain(plantType.waterLevel);
    });

    it('should only accept allowed WaterCycle values', async () => {
      const plantType = await db.plantType.create({ ...testPlantType });
      expect(WaterCycle).toContain(plantType.waterCycle);
    });
  });

  describe('associations', () => {
    it('should return a list of plants in response', async () => {
      const user = await db.user.create(testUser);
      const plantType = await db.plantType.create(testPlantType);
      const nook = await db.nook.create({
        ...testNook,
        userId: user.id,
      });

      let plants = [];
      for (let i = 0; i < 9; i++) {
        const plant = await db.plant.create({
          ...testPlant,
          nookId: nook.id,
          plantTypeId: plantType.id,
        });
        plants.push(plant);
      }

      const plantIds = plants.map(plant => plant.id);
      const plantTypePlants = await plantType.getPlants();
      const plantTypePlantIds = plantTypePlants.map(plant => plant.id);

      expect(plantTypePlants).toBeDefined();
      expect(plantTypePlants.length).toBe(9);
      expect(plantTypePlantIds).toEqual(expect.arrayContaining(plantIds));
    });
  });
});
