module.exports = {
  up: queryInterface =>
    queryInterface.removeColumn('users', 'nickname'),
  down: (queryInterface, { STRING }) =>
    queryInterface.addColumn('users', 'nickname', STRING)
}
