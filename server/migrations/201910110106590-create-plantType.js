const { 
  LuxLevel, 
  WaterLevel, 
  WaterCycle 
} = require('../utils/seeds/enums.ts')

module.exports = {
  up: async (queryInterface, {
    UUID, DATE, STRING, ENUM, literal
  }) => {
   return queryInterface.createTable('plantTypes', {
      id: {
        type: UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: literal('uuid_generate_v4()')
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
      photoUrl: {
        allowNull: false,
        type: STRING
      },
      luxLevel: {
        allowNull: false,
        type: ENUM([...LuxLevel])
      }, 
      waterLevel: {
        allowNull: false,
        type: ENUM([...WaterLevel])
      }, 
      waterCycle: {
        allowNull: false,
        type: ENUM([...WaterCycle])
      }
    })
  },
  down: queryInterface =>
    queryInterface.dropTable('plantTypes')
}
