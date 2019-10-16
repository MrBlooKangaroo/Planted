const { Health } = require('../utils/seeds/enums.ts');

module.exports = {
  up: async (queryInterface, {
    UUID, DATE, STRING, ENUM, literal
  }) => {
    return await queryInterface.createTable('plants', {
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
      nookId:{
        allowNull: false,
        type: UUID,
        references: {
          model: 'nooks',
          key: 'id',
        }
      },
      plantTypeId:{
        allowNull: false,
        type: UUID,
        references: {
          model: 'plantTypes',
          key: 'id',
        }
      },
      photoUrl: {
        allowNull: true,
        type: STRING
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('plants');
  }
};