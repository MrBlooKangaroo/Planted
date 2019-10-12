const db = require('../index');
const { cleanUpDb, closeDbConnection } = require('../../utils/test');
const { Level } = require('../../utils/enums')

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
    name: 'Pretty Plants',
    location: 'back patio',
    luxLevel: 'HIGH',   
    photo: 'prettyplants.jpg'
}

describe('Nook Model', () => {
  describe('validations', () => {
    it('should require presence of name', async () => {
      const nook = await db.user.create({ ...nookDatum, name: null })
        .catch(({ name: errorName }) => errorName);

      expect(nook).toBe('SequelizeDatabaseError');
    });

    it('should require presence of lux level', async () => {
      const nook = await db.plant.create({ ...nookDatum, luxLevel: null })
        .catch(({ name: errorName }) => errorName);

      expect(nook).toBe('SequelizeDatabaseError');
    });

    it('should only accept allowed level values', async () => {
    const user = await db.user.create(userDatum)
    const nook = await db.nook.create({ 
        ...nookDatum, 
        userId: user.id 
    })

    expect(Level).toContain(nook.luxLevel);
    });
  });
});
