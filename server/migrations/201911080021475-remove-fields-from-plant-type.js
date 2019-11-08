'use strict';

module.exports = {
  up: queryInterface => {
    return Promise.all([
      queryInterface.removeColumn('plantTypes', 'description'),
      queryInterface.removeColumn('plantTypes', 'instructions'),
    ]);
  },
  down: (queryInterface, { STRING }) => {
    return [
      queryInterface.addColumn('plantTypes', 'description', {
        type: STRING(10000),
        allowNull: false,
      }),
      queryInterface.addColumn('plantTypes', 'instructions', {
        type: STRING(10000),
        allowNull: false,
      }),
    ];
  },
};
