const db = require('../index');
const { cleanUpDb, closeDbConnection } = require('../../utils/test');
const { testUser, test, WateringFrequency } = require('../../utils/enums')

afterEach(cleanUpDb);
afterAll(closeDbConnection);

describe('Watering Model', () => {
    describe('validations', () => {
        it('should be able to create an instance of watering', async () => {
            const user = await db.user.create(userDatum)
            const plantType = await db.plantType.create(plantTypeDatum)
            const nook = await db.nook.create({ 
                ...nookDatum, 
                userId: user.id 
            })
            const plant = await db.plant.create({ 
                ...plantDatum, 
                nookId: nook.id,
                plantTypeId: plantType.id
            })

            const watering = await db.watering.create({
                ...wateringDatum,
                plantId: plant.id
            })

            expect(watering.executedAt).toEqual(wateringDatum.executedAt);
            expect(watering.expectedAt).toEqual(wateringDatum.expectedAt);
            expect(watering.plantId).toEqual(plant.id);
        });
    });
  });
  