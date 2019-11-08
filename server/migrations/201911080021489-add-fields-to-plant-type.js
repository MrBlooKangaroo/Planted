'use strict';

module.exports = {
  up: (queryInterface, { STRING, BOOLEAN }) => {
    return Promise.all([
      queryInterface.addColumn('plantTypes', 'photoUrlHorizontalCrop', {
        type: STRING,
        allowNull: false,
      }),
      queryInterface.addColumn('plantTypes', 'photoUrlVerticalCrop', {
        type: STRING,
        allowNull: false,
      }),
      queryInterface.addColumn('plantTypes', 'featuresWeb', {
        type: STRING(2000),
        allowNull: false,
      }),
      queryInterface.addColumn('plantTypes', 'instructionsWeb', {
        type: STRING(2000),
        allowNull: false,
      }),
      queryInterface.addColumn('plantTypes', 'featuresiOS', {
        type: STRING,
        allowNull: false,
      }),
      queryInterface.addColumn('plantTypes', 'instructionsiOS', {
        type: STRING,
        allowNull: false,
      }),
      queryInterface.addColumn('plantTypes', 'petToxicity', {
        type: STRING,
        allowNull: false,
      }),
      queryInterface.addColumn('plantTypes', 'colorPalette', {
        type: STRING,
        allowNull: false,
      }),
      queryInterface.addColumn('plantTypes', 'humidityAdvice', {
        type: STRING,
        allowNull: false,
      }),
      queryInterface.addColumn('plantTypes', 'travelAdvice', {
        type: STRING,
        allowNull: false,
      }),
      queryInterface.addColumn('plantTypes', 'careAdvice', {
        type: STRING,
        allowNull: false,
      }),
      queryInterface.addColumn('plantTypes', 'luxLevelInfo', {
        type: STRING,
        allowNull: false,
      }),
      queryInterface.addColumn('plantTypes', 'waterCycleInfo', {
        type: STRING,
        allowNull: false,
      }),
      queryInterface.addColumn('plantTypes', 'jungleVibes', {
        type: BOOLEAN,
        allowNull: false,
      }),
      queryInterface.addColumn('plantTypes', 'airyFresh', {
        type: BOOLEAN,
        allowNull: false,
      }),
      queryInterface.addColumn('plantTypes', 'purifiesAir', {
        type: BOOLEAN,
        allowNull: false,
      }),
    ]);
  },
  down: queryInterface => [
    queryInterface.removeColumn('plantTypes', 'photoUrlHorizontalCrop'),
    queryInterface.removeColumn('plantTypes', 'photoUrlVerticalCrop'),
    queryInterface.removeColumn('plantTypes', 'featuresWeb'),
    queryInterface.removeColumn('plantTypes', 'instructionsWeb'),
    queryInterface.removeColumn('plantTypes', 'featuresiOS'),
    queryInterface.removeColumn('plantTypes', 'instructionsiOS'),
    queryInterface.removeColumn('plantTypes', 'petToxicity'),
    queryInterface.removeColumn('plantTypes', 'colorPalette'),
    queryInterface.removeColumn('plantTypes', 'humidityAdvice'),
    queryInterface.removeColumn('plantTypes', 'travelAdvice'),
    queryInterface.removeColumn('plantTypes', 'careAdvice'),
    queryInterface.removeColumn('plantTypes', 'luxLevelInfo'),
    queryInterface.removeColumn('plantTypes', 'waterCycleInfo'),
    queryInterface.removeColumn('plantTypes', 'jungleVibes'),
    queryInterface.removeColumn('plantTypes', 'airyFresh'),
    queryInterface.removeColumn('plantTypes', 'purifiesAir'),
  ],
};
