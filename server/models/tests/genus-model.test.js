const db = require('../index');
const { cleanUpDb, closeDbConnection } = require('../../utils/test');
const { Level, Frequency } = require('../../utils/enums')

afterEach(cleanUpDb);
afterAll(closeDbConnection);

const genusDatum = {
  name: 'God\'s Petunia',
  description: 'really cool looking',
  instructions: 'just give em lots of love',
  features: 'Purifies the air',
  photo: 'godspetunia.jpg',
  colors: 'blue green yello pink',
  luxLevel: 'HIGH',
  waterLevel: 'LOW',
  waterCycle: 'DAILY'
}

describe('Genus Model', () => {
  describe('validations', () => {
    it('should require presence of name', async () => {
      const genus = await db.genus.create({ ...genusDatum, name: null })
        .catch(({ name: errorName }) => errorName);

      expect(genus).toBe('SequelizeDatabaseError');
    });
    
    it('should require presence of description', async () => {
      const genus = await db.genus.create({ ...genusDatum, description: null })
        .catch(({ name: errorName }) => errorName);

      expect(genus).toBe('SequelizeDatabaseError');
    });

    it('should require presence of instructions', async () => {
      const genus = await db.genus.create({ ...genusDatum, instructions: null })
        .catch(({ name: errorName }) => errorName);

      expect(genus).toBe('SequelizeDatabaseError');
    });

    it('should require presence of features', async () => {
      const genus = await db.genus.create({ ...genusDatum, features: null })
        .catch(({ name: errorName }) => errorName);

      expect(genus).toBe('SequelizeDatabaseError');
    });

    it('should require presence of photo', async () => {
      const genus = await db.genus.create({ ...genusDatum, photo: null })
        .catch(({ name: errorName }) => errorName);

      expect(genus).toBe('SequelizeDatabaseError');
    });

    it('should require presence of colors', async () => {
      const genus = await db.genus.create({ ...genusDatum, colors: null })
        .catch(({ name: errorName }) => errorName);

      expect(genus).toBe('SequelizeDatabaseError');
    });

    it('should require presence of luxLevel', async () => {
      const genus = await db.genus.create({ ...genusDatum, luxLevel: null })
        .catch(({ name: errorName }) => errorName);

      expect(genus).toBe('SequelizeDatabaseError');
    });

    it('should require presence of waterLevel', async () => {
      const genus = await db.genus.create({ ...genusDatum, waterLevel: null })
        .catch(({ name: errorName }) => errorName);

      expect(genus).toBe('SequelizeDatabaseError');
    });

    it('should require presence of waterCycle', async () => {
      const genus = await db.genus.create({ ...genusDatum, waterCycle: null })
        .catch(({ name: errorName }) => errorName);

      expect(genus).toBe('SequelizeDatabaseError');
    });

    it('should only accept allowed Frequency values', async () => {
      const genus = await db.genus.create({...genusDatum})
  
      expect(Frequency).toContain(genus.waterCycle)
    });

    it('should only accept allowed Level values', async () => {
      const genus = await db.genus.create({...genusDatum})

      expect(Level).toContain(genus.luxLevel);
      expect(Level).toContain(genus.waterLevel);
    });
  });
});
