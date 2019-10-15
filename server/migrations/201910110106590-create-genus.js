const { Level, Frequency } = require('../utils/enums.ts');

module.exports = {
  up: async (queryInterface, {
    UUID, DATE, STRING, ENUM, literal
  }) => {
   return queryInterface.createTable('genera', {
      id: {
        type: UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: literal('uuid_generate_v4()'),
      },
      createdAt: {
        allowNull: false,
        type: DATE
      },
      updatedAt: {
        allowNull: false,
        type: DATE
      },
      name: {
        allowNull: false,
        type: STRING
      },
      description: {
        allowNull: false,
        type: STRING(10000)
      },
      instructions: {
        allowNull: false,
        type: STRING(10000)
      },
      features: {
        allowNull: false,
        type: STRING(10000)
      },
      colors: {
        allowNull: false,
        type: STRING
      },
      photo: {
        allowNull: false,
        type: STRING
      },
      luxLevel: {
        allowNull: false,
        type: ENUM([...Level])
      }, 
      waterLevel: {
        allowNull: false,
        type: ENUM([...Level])
      }, 
      waterCycle: {
        allowNull: false,
        type: ENUM([...Frequency])
      }, 
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('genera');
  }
};