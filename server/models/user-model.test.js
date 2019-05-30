const db = require('./index');
const { cleanUpDb, closeDbConnection } = require('../utils/test');

afterEach(cleanUpDb);
afterAll(closeDbConnection);

const userDatum = {
  firstName: 'Mook',
  lastName: 'Flexer',
  email: 'mookin@mook.com',
};

describe('User Model', () => {
  describe('validations', () => {
    it('should require presence of firstName', async () => {
      const user = await db.user.create({ ...userDatum, firstName: null })
        .catch(({ name: errorName }) => errorName);

      expect(user).toBe('SequelizeDatabaseError');
    });

    it('should require presence of lastName', async () => {
      const user = await db.user.create({ ...userDatum, lastName: null })
        .catch(({ name: errorName }) => errorName);

      expect(user).toBe('SequelizeDatabaseError');
    });

    it('should require presence of email', async () => {
      const user = await db.user.create({ ...userDatum, email: null })
        .catch(({ name: errorName }) => errorName);

      expect(user).toBe('SequelizeDatabaseError');
    });

    it('should not allow duplicate emails', async () => {
      const validUser = await db.user.create(userDatum);
      const invalidUser = await db.user.create(userDatum)
        .catch(({ name: errorName }) => errorName);

      expect(validUser).toBeDefined();
      expect(validUser.id).toBeDefined();
      expect(invalidUser).toBe('SequelizeUniqueConstraintError');
    });
  });
});
