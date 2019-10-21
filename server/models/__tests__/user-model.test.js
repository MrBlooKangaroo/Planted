const db = require('../index')
const { cleanUpDb, closeDbConnection } = require('../../utils/testing')
const { testUser } = require('../../utils/testing/testData')

afterEach(cleanUpDb)
afterAll(closeDbConnection)

describe('User Model', () => {

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
