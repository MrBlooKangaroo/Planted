const db = require('../models');
const { plantTypes } = require('./data');

module.exports = {
  up: async () => db.plantType.bulkCreate(plantTypes),
  down: queryInterface => queryInterface.bulkDelete('plantTypes', null, {}),
};
