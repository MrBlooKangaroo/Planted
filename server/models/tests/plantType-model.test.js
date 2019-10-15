const db = require('../index');
const { cleanUpDb, closeDbConnection } = require('../../utils/test');
const { LuxLevel, WaterLevel, WateringFrequency } = require('../../utils/enums')

afterEach(cleanUpDb);
afterAll(closeDbConnection);

const plantTypeDatum = {
  name: 'God\'s Petunia',
  description: 'really cool looking',
  instructions: 'just give em lots of love',
  features: 'Purifies the air',
  photoUrl: 'godspetunia.jpg',
  colors: 'blue green yello pink',
  luxLevel: 'HIGH',
  waterLevel: 'LOW',
  waterCycle: 'DAILY'
}

describe('plantType Model', () => {
  describe('validations', () => {
    it('should require presence of name', async () => {
      const plantType = await db.plantType.create({ ...plantTypeDatum, name: null })
        .catch(({ name: errorName }) => errorName);

      expect(plantType).toBe('SequelizeDatabaseError');
    });
    
    it('should require presence of description', async () => {
      const plantType = await db.plantType.create({ ...plantTypeDatum, description: null })
        .catch(({ name: errorName }) => errorName);

      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should require presence of instructions', async () => {
      const plantType = await db.plantType.create({ ...plantTypeDatum, instructions: null })
        .catch(({ name: errorName }) => errorName);

      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should require presence of features', async () => {
      const plantType = await db.plantType.create({ ...plantTypeDatum, features: null })
        .catch(({ name: errorName }) => errorName);

      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should require presence of photo', async () => {
      const plantType = await db.plantType.create({ ...plantTypeDatum, photoUrl: null })
        .catch(({ name: errorName }) => errorName);

      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should require presence of colors', async () => {
      const plantType = await db.plantType.create({ ...plantTypeDatum, colors: null })
        .catch(({ name: errorName }) => errorName);

      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should require presence of luxLevel', async () => {
      const plantType = await db.plantType.create({ ...plantTypeDatum, luxLevel: null })
        .catch(({ name: errorName }) => errorName);

      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should require presence of waterLevel', async () => {
      const plantType = await db.plantType.create({ ...plantTypeDatum, waterLevel: null })
        .catch(({ name: errorName }) => errorName);

      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should require presence of waterCycle', async () => {
      const plantType = await db.plantType.create({ ...plantTypeDatum, waterCycle: null })
        .catch(({ name: errorName }) => errorName);

      expect(plantType).toBe('SequelizeDatabaseError');
    });

    it('should only accept allowed Frequency values', async () => {
      const plantType = await db.plantType.create({...plantTypeDatum})
  
      expect(WateringFrequency).toContain(plantType.waterCycle)
    });

    it('should only accept allowed Level values', async () => {
      const plantType = await db.plantType.create({...plantTypeDatum})

      expect(LuxLevel).toContain(plantType.luxLevel);
      expect(WaterLevel).toContain(plantType.waterLevel);
    });+6
  });
});
