const db = require('../index')
const { cleanUpDb, closeDbConnection } = require('../../utils/test')
const { testUser, testNook } = require('../../utils/seeds/testData')

afterEach(cleanUpDb)
afterAll(closeDbConnection)

describe('User Model', () => {
  describe('validations', () => {

    it('should return all fields in response', async () => {
      const user = await db.user.create(testUser)

      expect(user).toBeDefined()
      expect(user.nickname).toBe('Hotshot')
      expect(user.firstName).toBe('Mook')
      expect(user.lastName).toBe('Flexer')
      expect(user.email).toBe('mookin@mook.com')
    })

    it('should return a list of waterings in response', async () => {
      const user = await db.user.create(testUser)
      
      for (let i = 0; i < 13; i++) {
        await db.nook.create({
            ...testNook,
            userId: user.id
        })  
      }

      const userNooks = await db.nook.findAll({
        where: { userId: user.id }
      })

      expect(userNooks).toBeDefined()
      expect(userNooks.length).toBe(13)
      expect(userNooks[0].userId).toBe(user.id)
    })

    it('should require presence of nickname', async () => {
      const user = await db.user.create({ ...testUser, nickname: null })
        .catch(({ name: errorName }) => errorName)

      expect(user).toBe('SequelizeDatabaseError')
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
})
