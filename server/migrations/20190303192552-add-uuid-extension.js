

module.exports = {
  up: queryInterface =>
    queryInterface.sequelize.query(
      'CREATE EXTENSION IF NOT EXISTS "uuid-ossp"',
    ),
  down: queryInterface =>
    queryInterface.sequelize.query(
      'DROP EXTENSION IF EXISTS "uuid-ossp"'
    ),
};
