const db = require('../index');
const { cleanUpDb, closeDbConnection } = require('../../utils/test');
const { LuxLevel, WaterLevel, WateringFrequency } = require('../../utils/enums')

afterEach(cleanUpDb);
afterAll(closeDbConnection);

const userDatum = {
    nickname: 'Hotshot',
    firstName: 'Mook',
    lastName: 'Flexer',
    email: 'mookin@mook.com',
};

const nookDatum = {
    name: 'Mr. Nook',
    luxLevel: 'MEDIUM',
}

const plantDatum = {
  name: 'Ladyfingers',
  health: 'DEAD',
  photoUrl: 'ladyfingers.jpg'
};

const plantTypeDatum = {
  name: 'God\'s Petunia',
  description: 'really cool looking',
  instructions: 'just give em lots of love',
  features: 'Purifies the air',
  colors: 'yellow purple grey',
  photoUrl: 'godspetunia.jpg',
  luxLevel: 'HIGH',
  waterLevel: 'MEDIUM',
  waterCycle: 'DAILY'
}

const wateringDatum = {
    expectedAt: new Date('December 17, 1995 03:24:00'),
    executedAt: new Date('December 17, 1995 03:24:00'),
}

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
  