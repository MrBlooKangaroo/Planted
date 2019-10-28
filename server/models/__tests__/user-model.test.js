const db = require('../index')
const { cleanUpDb, closeDbConnection } = require('../../utils/testing')
const { 
  testUser, 
  testNook 
} = require('../../utils/testing/testData')

afterEach(cleanUpDb)
afterAll(closeDbConnection)

describe('User Model', () => {
  describe('validations', () => {
    it('should return firstName and lastName in response', async () => {
      const user = await db.user.create(testUser)

      expect(user).toBeDefined()
      expect(user.firstName).toBe('Mook')
      expect(user.lastName).toBe('Flexer')
      expect(user.email).toBe('mookin@mook.com')
    })

    it('should require presence of firstName', async () => {
      const user = await db.user.create({ ...testUser, firstName: null })
        .catch(({ name: errorName }) => errorName)

      expect(user).toBe('SequelizeDatabaseError')
    })

    it('should require presence of email', async () => {
      const user = await db.user.create({ ...testUser, email: null })
        .catch(({ name: errorName }) => errorName)

      expect(user).toBe('SequelizeDatabaseError')
    })

    it('should not allow duplicate emails', async () => {
      const validUser = await db.user.create(testUser)
      const invalidUser = await db.user.create(testUser)
        .catch(({ name: errorName }) => errorName)

      expect(validUser).toBeDefined()
      expect(invalidUser).toBe('SequelizeUniqueConstraintError')
    })
  })

  describe('associations', () => {
    it('should return a list of nooks in response', async () => {
      const user = await db.user.create(testUser)

      let nooks = []
      for (let i = 0; i < 11; i++) {
        const nook = await db.nook.create({
          ...testNook,
          userId: user.id
        })
        nooks.push(nook)
      }

      const nookIds = nooks.map(nook => nook.id)
      const userNooks = await user.getNooks()
      const userNookIds = userNooks.map(nook => nook.id)

      expect(userNooks).toBeDefined()
      expect(userNooks.length).toBe(11)
      expect(userNookIds).toEqual(expect.arrayContaining(nookIds))
    })
  })
})
