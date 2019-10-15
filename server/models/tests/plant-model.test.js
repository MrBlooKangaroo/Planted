const db = require('../index');
const { cleanUpDb, closeDbConnection } = require('../../utils/test');
const { Health } = require('../../utils/enums')

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
    name: 'Mr. Nook',
    luxLevel: 'MEDIUM',
}

const plantDatum = {
  name: 'Ladyfingers',
  health: 'DEAD',
  photo: 'ladyfingers.jpg'
};

const genusDatum = {
  name: 'God\'s Petunia',
  description: 'really cool looking',
  instructions: 'just give em lots of love',
  features: 'Purifies the air',
  colors: 'yellow purple grey',
  photo: 'godspetunia.jpg',
  luxLevel: 'HIGH',
  waterLevel: 'MEDIUM',
  waterCycle: 'MONTHLY'
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
      const genus = await db.genus.create(genusDatum)
      const nook = await db.nook.create({ 
        ...nookDatum, 
        userId: user.id 
      })
      const plant = await db.plant.create({ 
          ...plantDatum, 
          userId: user.id,
          nookId: nook.id,
          genusId: genus.id
      })

      expect(Health).toContain(plant.health);
    });
    
    it('should only accept allowed health values', async () => {
      const user = await db.user.create(userDatum)
      const genus = await db.genus.create(genusDatum)
      const nook = await db.nook.create({ 
        ...nookDatum, 
        userId: user.id 
      })

      const plantGood = await db.plant.create({ 
        ...plantDatum, 
        userId: user.id,
        nookId: nook.id,
        genusId: genus.id,
        health: 'HEALTHY' 
      })
      
      const plantBad = await db.plant.create({ 
        ...plantDatum, 
        userId: user.id,
        nookId: nook.id,
        genusId: genus.id,
        health: 'SOME CRAZY INPUT' 
      })
        .catch(({ name: errorName }) => errorName);

      expect(Health).toContain(plantGood.health);
      expect(plantBad).toBe('SequelizeDatabaseError');
    });
  });
});
