module.exports = {
  up: queryInterface =>
    queryInterface.removeColumn('users', 'nickname'),
  down: (queryInterface, { STRING }) =>
    queryInterface.createColumn('users', 'nickname', STRING)
}
