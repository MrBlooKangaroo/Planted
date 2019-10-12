const db = require('../index');
const { cleanUpDb, closeDbConnection } = require('../../utils/test');
const { Level } = require('../../utils/enums')

afterEach(cleanUpDb);
afterAll(closeDbConnection);

const genusDatum = {
  nickname: "God's Petunia",
  nomenclature: "lorem ipsumius dolorae",
  description: "really cool looking",
  instructions: "just give em lots of love",
  photo: "godspetunia.jpg",
  luxPreferred: "HIGH",
  wateringCycle: "DAILY"
}

describe('Genus Model', () => {
  describe('validations', () => {
    it('should require presence of nickname', async () => {
      const genus = await db.genus.create({ ...genusDatum, nickname: null })
        .catch(({ name: errorName }) => errorName);

      expect(genus).toBe('SequelizeDatabaseError');
    });

    it('should require presence of nomenclature', async () => {
      const genus = await db.genus.create({ ...genusDatum, nomenclature: null })
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

    it('should require presence of photo', async () => {
      const genus = await db.genus.create({ ...genusDatum, photo: null })
        .catch(({ name: errorName }) => errorName);

      expect(genus).toBe('SequelizeDatabaseError');
    });

    it('should only accept allowed level values', async () => {
    const genus = await db.genus.create({...genusDatum})

    expect(Level).toContain(genus.luxPreferred);
    });
  });
});
