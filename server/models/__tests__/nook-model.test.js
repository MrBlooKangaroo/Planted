const db = require('../index')
const { LuxLevel } = require('../../utils/enums')
const { cleanUpDb, closeDbConnection } = require('../../utils/testing')
const { testUser, testNook } = require('../../utils/testing/testData')

afterEach(cleanUpDb)
afterAll(closeDbConnection)

describe('Nook Model', () => {

  it('should require presence of name', async () => {
    const user = await db.user.create(testUser)
    const nook = await db.user.create({ 
      ...testNook, 
      userId: user.id,
      name: null 
    })
      .catch(({ name: errorName }) => errorName)

    expect(nook).toBe('SequelizeDatabaseError')
  })

  it('should require presence of luxLevel', async () => {
    const nook = await db.plant.create({ ...testNook, luxLevel: null })
      .catch(({ name: errorName }) => errorName)

    expect(nook).toBe('SequelizeDatabaseError')
  })

  it('should only accept allowed LuxLevel values', async () => {
    const user = await db.user.create(testUser)
    const nook = await db.nook.create({ 
        ...testNook, 
        userId: user.id 
    })

    expect(LuxLevel).toContain(nook.luxLevel)
  })
})
