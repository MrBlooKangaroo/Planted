const db = require('../index');
const { cleanUpDb, closeDbConnection } = require('../../utils/test');
const { PlantHealth } = require('../../utils/enums')

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

describe('Plant Model', () => {
  describe('validations', () => {
    it('should require presence of name', async () => {
      const plant = await db.plant.create({ ...plantDatum, name: null })
        .catch(({ name: errorName }) => errorName);

      expect(plant).toBe('SequelizeDatabaseError');
    });

    it('should require presence of health', async () => {
      const plant = await db.plant.create({ ...plantDatum, health: null })
        .catch(({ name: errorName }) => errorName);

      expect(plant).toBe('SequelizeDatabaseError');
    });
    
    it('should be able to create a plant', async () => {
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

      expect(PlantHealth).toContain(plant.health);
    });
    
    it('should only accept allowed health values', async () => {
      const user = await db.user.create(userDatum)
      const plantType = await db.plantType.create(plantTypeDatum)
      const nook = await db.nook.create({ 
        ...nookDatum, 
        userId: user.id 
      })

      const plantGood = await db.plant.create({ 
        ...plantDatum, 
        nookId: nook.id,
        plantTypeId: plantType.id,
        health: 'HEALTHY' 
      }).catch(({ name: errorName }) => errorName);

      expect(PlantHealth).toContain(plantGood.health);

    });
    it('should show that the plant has a Sequelize error for wrong health value', async () =>{
      const user = await db.user.create(userDatum)
      const plantType = await db.plantType.create(plantTypeDatum)
      const nook = await db.nook.create({ 
        ...nookDatum, 
        userId: user.id 
      })

      const plantBad = await db.plant.create({ 
        ...plantDatum, 
        nookId: nook.id,
        plantTypeId: plantType.id,
        health: 'SOME CRAZY INPUT' 
      })
      .catch(({ name: errorName }) => errorName);

      expect(plantBad).toBe('SequelizeDatabaseError');
    });
  });
});
