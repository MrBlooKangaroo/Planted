const db = require('../index')
const { LuxLevel, WaterLevel, WaterCycle } = require('../../utils/seeds/enums')
const { cleanUpDb, closeDbConnection } = require('../../utils/test')
const { testPlantType } = require('../../utils/seeds/testData')

afterEach(cleanUpDb)
afterAll(closeDbConnection)

describe('Plant Type Model', () => {

  it('should require presence of name', async () => {
    const plantType = await db.plantType.create({ ...testPlantType, name: null })
      .catch(({ name: errorName }) => errorName)

    expect(plantType).toBe('SequelizeDatabaseError')
  })
  
  it('should require presence of description', async () => {
    const plantType = await db.plantType.create({ ...testPlantType, description: null })
      .catch(({ name: errorName }) => errorName)

    expect(plantType).toBe('SequelizeDatabaseError')
  })

  it('should require presence of instructions', async () => {
    const plantType = await db.plantType.create({ ...testPlantType, instructions: null })
      .catch(({ name: errorName }) => errorName)

    expect(plantType).toBe('SequelizeDatabaseError')
  })

  it('should require presence of photoUrl', async () => {
    const plantType = await db.plantType.create({ ...testPlantType, photoUrl: null })
      .catch(({ name: errorName }) => errorName)

    expect(plantType).toBe('SequelizeDatabaseError')
  })

  it('should require presence of luxLevel', async () => {
    const plantType = await db.plantType.create({ ...testPlantType, luxLevel: null })
      .catch(({ name: errorName }) => errorName)

    expect(plantType).toBe('SequelizeDatabaseError')
  })

  it('should require presence of waterLevel', async () => {
    const plantType = await db.plantType.create({ ...testPlantType, waterLevel: null })
      .catch(({ name: errorName }) => errorName)

    expect(plantType).toBe('SequelizeDatabaseError')
  })

  it('should require presence of waterCycle', async () => {
    const plantType = await db.plantType.create({ ...testPlantType, waterCycle: null })
      .catch(({ name: errorName }) => errorName)

    expect(plantType).toBe('SequelizeDatabaseError')
  })
  
  it('should only accept allowed LuxLevel values', async () => {
    const plantType = await db.plantType.create({...testPlantType})

    expect(LuxLevel).toContain(plantType.luxLevel)
  })

  it('should only accept allowed WaterLevel values', async () => {
    const plantType = await db.plantType.create({...testPlantType})

    expect(WaterLevel).toContain(plantType.waterLevel)
  })

  it('should only accept allowed WaterCycle values', async () => {
    const plantType = await db.plantType.create({...testPlantType})

    expect(WaterCycle).toContain(plantType.waterCycle)
  })
})
