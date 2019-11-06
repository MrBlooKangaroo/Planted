const db = require('../models');
const { plants } = require('./data');
const { getRandomId } = require('../utils');

module.exports = {
  up: async () => {
    const nooks = await db.nook.findAll();
    const plantTypes = await db.plantType.findAll();
    const plantSeeds = plants.map(plant => {
      return {
        ...plant,
        nookId: getRandomId(nooks),
        plantTypeId: getRandomId(plantTypes),
      };
    });
    await db.plant.bulkCreate(plantSeeds);
  },
  down: queryInterface => queryInterface.bulkDelete('plants', null, {}),
};
