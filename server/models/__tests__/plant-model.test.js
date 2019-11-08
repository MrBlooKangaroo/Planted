const db = require('../index');
const { cleanUpDb, closeDbConnection } = require('../../utils/testing');
const { testUser, testPlant, testNook, testPlantType, testWatering } = require('../../utils/testing/testData');

afterEach(cleanUpDb);
afterAll(closeDbConnection);

describe('Plant Model', () => {
  describe('validations', () => {
    it('should return photoUrl, nookId and plantTypeId in response', async () => {
      const user = await db.user.create(testUser);
      const plantType = await db.plantType.create(testPlantType);
      const nook = await db.nook.create({
        ...testNook,
        userId: user.id,
      });
      const plant = await db.plant.create({
        ...testPlant,
        nookId: nook.id,
        plantTypeId: plantType.id,
      });

      expect(plant).toBeDefined();
      expect(plant.photoUrl).toBe(testPlant.photoUrl);
      expect(plant.nookId).toBe(nook.id);
      expect(plant.plantTypeId).toBe(plantType.id);
    });
  });

  describe('associations', () => {
    it('should associate a plant with a nook', async () => {
      const user = await db.user.create(testUser);
      const plantType = await db.plantType.create(testPlantType);
      const nook = await db.nook.create({
        ...testNook,
        userId: user.id,
      });
      const plant = await db.plant.create({
        ...testPlant,
        nookId: nook.id,
        plantTypeId: plantType.id,
      });
      const plantNook = await plant.getNook();

      expect(plantNook).toBeDefined();
      expect(plantNook.id).toBe(nook.id);
      expect(plantNook.name).toBe(nook.name);
      expect(plantNook.photoUrl).toBe(nook.photoUrl);
      expect(plantNook.luxLevel).toBe(nook.luxLevel);
      expect(plantNook.userId).toBe(nook.userId);
    });

    it('should associate a plant with a plantType', async () => {
      const user = await db.user.create(testUser);
      const plantType = await db.plantType.create(testPlantType);
      const nook = await db.nook.create({
        ...testNook,
        userId: user.id,
      });
      const plant = await db.plant.create({
        ...testPlant,
        nookId: nook.id,
        plantTypeId: plantType.id,
      });
      const plantPlantType = await plant.getPlantType();

      expect(plantPlantType).toBeDefined();
      expect(plantPlantType.id).toBe(plantType.id);
      expect(plantPlantType.name).toBe(plantType.name);
      expect(plantPlantType.photoUrl).toBe(plantType.photoUrl);
      expect(plantPlantType.photoUrlHorizontalCrop).toBe(plantType.photoUrlHorizontalCrop);
      expect(plantPlantType.photoUrlVerticalCrop).toBe(plantType.photoUrlVerticalCrop);
      expect(plantPlantType.featuresWeb).toBe(plantType.featuresWeb);
      expect(plantPlantType.instructionsWeb).toBe(plantType.instructionsWeb);
      expect(plantPlantType.featuresiOS).toBe(plantType.featuresiOS);
      expect(plantPlantType.instructionsiOS).toBe(plantType.instructionsiOS);
      expect(plantPlantType.petToxicity).toBe(plantType.petToxicity);
      expect(plantPlantType.colorPalette).toBe(plantType.colorPalette);
      expect(plantPlantType.humidityAdvice).toBe(plantType.humidityAdvice);
      expect(plantPlantType.travelAdvice).toBe(plantType.travelAdvice);
      expect(plantPlantType.careAdvice).toBe(plantType.careAdvice);
      expect(plantPlantType.luxLevelInfo).toBe(plantType.luxLevelInfo);
      expect(plantPlantType.waterCycleInfo).toBe(plantType.waterCycleInfo);
      expect(plantPlantType.jungleVibes).toBe(plantType.jungleVibes);
      expect(plantPlantType.airyFresh).toBe(plantType.airyFresh);
      expect(plantPlantType.purifiesAir).toBe(plantType.purifiesAir);
      expect(plantPlantType.luxLevel).toBe(plantType.luxLevel);
      expect(plantPlantType.waterLevel).toBe(plantType.waterLevel);
      expect(plantPlantType.waterCycle).toBe(plantType.waterCycle);
    });

    it('should return a list of waterings in response', async () => {
      const user = await db.user.create(testUser);
      const plantType = await db.plantType.create(testPlantType);
      const nook = await db.nook.create({
        ...testNook,
        userId: user.id,
      });
      const plant = await db.plant.create({
        ...testPlant,
        nookId: nook.id,
        plantTypeId: plantType.id,
      });

      let waterings = [];
      for (let i = 0; i < 13; i++) {
        const watering = await db.watering.create({
          ...testWatering,
          plantId: plant.id,
        });
        waterings.push(watering);
      }

      const wateringIds = waterings.map(watering => watering.id);
      const plantWaterings = await plant.getWaterings();
      const plantWateringIds = plantWaterings.map(plantWatering => plantWatering.id);

      expect(plantWaterings).toBeDefined();
      expect(plantWaterings.length).toBe(13);
      expect(plantWateringIds).toEqual(expect.arrayContaining(wateringIds));
    });
  });
});
