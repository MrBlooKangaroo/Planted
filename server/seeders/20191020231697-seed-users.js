const db = require('../models');
const { users } = require('./data');

module.exports = {
  up: async () => db.user.bulkCreate(users),
  down: queryInterface => queryInterface.bulkDelete('users', null, {}),
};
