const { LuxLevel } = require('../utils/enums')

module.exports = {
  up: async (queryInterface, {
    UUID, DATE, STRING, ENUM, literal
  }) => {
    return await queryInterface.createTable('nooks', {
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
      userId:{
        allowNull: false,
        type: UUID,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      name: {
        allowNull: false,
        type: STRING
      },
      photoUrl: {
        allowNull: true,
        type: STRING
      },
      luxLevel: {
        allowNull: false,
        type: ENUM([...LuxLevel])
      }
    })
  },
  down: queryInterface =>
    queryInterface.dropTable('nooks')
}