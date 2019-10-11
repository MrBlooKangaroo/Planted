const db = require('./index');
const { cleanUpDb, closeDbConnection } = require('../utils/test');
const { Health } = require('../utils/enums')

afterEach(cleanUpDb);
afterAll(closeDbConnection);

const userDatum = {
    nickname: 'Hotshot',
    firstName: 'Mook',
    lastName: 'Flexer',
    email: 'mookin@mook.com',
    city: 'boston',
};

const nookDatum = {
    name: 'Mr. Nook',
    luxLevel: 'MEDIUM',
}

const plantDatum = {
  name: 'Ladyfingers',
  health: 'DEAD',
  photo: 'ladyfingers.jpg'
};

describe('Plant Model', () => {
  describe('validations', () => {
    it('should require presence of name', async () => {
      const plant = await db.user.create({ ...plantDatum, name: null })
        .catch(({ name: errorName }) => errorName);

      expect(plant).toBe('SequelizeDatabaseError');
    });

    it('should require presence of health', async () => {
      const plant = await db.plant.create({ ...plantDatum, health: null })
        .catch(({ name: errorName }) => errorName);

      expect(plant).toBe('SequelizeDatabaseError');
    });

    it('should only accept allowed health values', async () => {
    const user = await db.user.create(userDatum)
    const nook = await db.nook.create({ 
        ...nookDatum, 
        userId: user.id 
    })
    const plant = await db.plant.create({ 
        ...plantDatum, 
        userId: user.id,
        nookId: nook.id 
    })

    expect(Health).toContain(plant.health);
    });
  });
});
