const db = require('../index');
const { cleanUpDb, closeDbConnection } = require('../../utils/testing');
const { testUser, testNook, testPlantType } = require('../../utils/testing/testData');

afterEach(cleanUpDb);
afterAll(closeDbConnection);

describe('Wish Model', () => {
  describe('validations', () => {
    it('should return plantId, plantTypeId and nookId in response', async () => {
      const user = await db.user.create(testUser);
      const plantType = await db.plantType.create(testPlantType);
      const nook = await db.nook.create({
        ...testNook,
        userId: user.id,
      });
      const wish = await db.wish.create({
        userId: user.id,
        plantTypeId: plantType.id,
        nookId: nook.id,
      });

      expect(wish).toBeDefined();
      expect(wish.userId).toBe(user.id);
      expect(wish.plantTypeId).toBe(plantType.id);
      expect(wish.nookId).toBe(nook.id);
    });

    it('should not let userId to be null', async () => {
      const user = await db.user.create(testUser);
      const plantType = await db.plantType.create(testPlantType);
      const nook = await db.nook.create({
        ...testNook,
        userId: user.id,
      });
      const wish = await db.wish
        .create({
          userId: null,
          plantTypeId: plantType.id,
          nookId: nook.id,
        })
        .catch(({ name: errorName }) => errorName);

      expect(wish).toBe('SequelizeDatabaseError');
    });

    it('should not let plantTypeId to be null', async () => {
      const user = await db.user.create(testUser);
      const nook = await db.nook.create({
        ...testNook,
        userId: user.id,
      });
      const wish = await db.wish
        .create({
          userId: user.id,
          plantTypeId: null,
          nookId: nook.id,
        })
        .catch(({ name: errorName }) => errorName);

      expect(wish).toBe('SequelizeDatabaseError');
    });

    it('should allow nookId to be null', async () => {
      const user = await db.user.create(testUser);
      const plantType = await db.plantType.create(testPlantType);
      const wish = await db.wish.create({
        userId: user.id,
        plantTypeId: plantType.id,
        nookId: null,
      });

      expect(wish).toBeDefined();
      expect(wish.userId).toBe(user.id);
      expect(wish.plantTypeId).toBe(plantType.id);
      expect(wish.nookId).toBe(null);
    });
  });

  describe('associations', () => {
    it('should associate a wish with a user', async () => {
      const user = await db.user.create(testUser);
      const plantType = await db.plantType.create(testPlantType);
      const nook = await db.nook.create({
        ...testNook,
        userId: user.id,
      });
      const wish = await db.wish.create({
        userId: user.id,
        plantTypeId: plantType.id,
        nookId: nook.id,
      });

      const wishUser = await wish.getUser();

      expect(wishUser).toBeDefined();
      expect(wishUser.id).toBe(user.id);
      expect(wishUser.firstName).toBe(user.firstName);
      expect(wishUser.lastName).toBe(user.lastName);
      expect(wishUser.photoUrl).toBe(user.photoUrl);
      expect(wishUser.email).toBe(user.email);
    });

    it('should associate a wish with a plantType', async () => {
      const user = await db.user.create(testUser);
      const plantType = await db.plantType.create(testPlantType);
      const nook = await db.nook.create({
        ...testNook,
        userId: user.id,
      });
      const wish = await db.wish.create({
        userId: user.id,
        plantTypeId: plantType.id,
        nookId: nook.id,
      });

      const wishPlantType = await wish.getPlantType();

      expect(wishPlantType.name).toBe(testPlantType.name);
      expect(wishPlantType.photoUrl).toBe(testPlantType.photoUrl);
      expect(wishPlantType.photoUrlHorizontalCrop).toBe(testPlantType.photoUrlHorizontalCrop);
      expect(wishPlantType.photoUrlVerticalCrop).toBe(testPlantType.photoUrlVerticalCrop);
      expect(wishPlantType.featuresWeb).toBe(testPlantType.featuresWeb);
      expect(wishPlantType.instructionsWeb).toBe(testPlantType.instructionsWeb);
      expect(wishPlantType.featuresiOS).toBe(testPlantType.featuresiOS);
      expect(wishPlantType.instructionsiOS).toBe(testPlantType.instructionsiOS);
      expect(wishPlantType.petToxicity).toBe(testPlantType.petToxicity);
      expect(wishPlantType.colorPalette).toBe(testPlantType.colorPalette);
      expect(wishPlantType.humidityAdvice).toBe(testPlantType.humidityAdvice);
      expect(wishPlantType.travelAdvice).toBe(testPlantType.travelAdvice);
      expect(wishPlantType.careAdvice).toBe(testPlantType.careAdvice);
      expect(wishPlantType.luxLevelInfo).toBe(testPlantType.luxLevelInfo);
      expect(wishPlantType.waterCycleInfo).toBe(testPlantType.waterCycleInfo);
      expect(wishPlantType.jungleVibes).toBe(testPlantType.jungleVibes);
      expect(wishPlantType.airyFresh).toBe(testPlantType.airyFresh);
      expect(wishPlantType.purifiesAir).toBe(testPlantType.purifiesAir);
      expect(wishPlantType.luxLevel).toBe(testPlantType.luxLevel);
      expect(wishPlantType.waterLevel).toBe(testPlantType.waterLevel);
      expect(wishPlantType.waterCycle).toBe(testPlantType.waterCycle);
    });

    it('should associate a wish with a nook', async () => {
      const user = await db.user.create(testUser);
      const plantType = await db.plantType.create(testPlantType);
      const nook = await db.nook.create({
        ...testNook,
        userId: user.id,
      });
      const wish = await db.wish.create({
        userId: user.id,
        plantTypeId: plantType.id,
        nookId: nook.id,
      });

      const wishNook = await wish.getNook();

      expect(wishNook).toBeDefined();
      expect(wishNook.id).toBe(nook.id);
      expect(wishNook.name).toBe(nook.name);
      expect(wishNook.photoUrl).toBe(nook.photoUrl);
      expect(wishNook.luxLevel).toBe(nook.luxLevel);
      expect(wishNook.userId).toBe(nook.userId);
    });
  });
});
