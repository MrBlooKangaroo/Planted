module.exports = {
  up: (queryInterface, { STRING }) =>
    queryInterface.addColumn('users', 'googleId', {
      type: STRING(10000),
      allowNull: false,
    }),
  down: queryInterface => queryInterface.removeColumn('users', 'googleId'),
};
