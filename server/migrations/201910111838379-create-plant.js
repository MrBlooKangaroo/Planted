const { Health } = require('../utils/enums.ts');

module.exports = {
  up: (queryInterface, {
    UUID, DATE, STRING, ENUM, literal
  }) => {
    return queryInterface.createTable('plants', {
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
      userId:{
        allowNull: false,
        type: UUID,
        references: {
          model: 'users',
          key: 'id',
        }
      },
      nookId:{
        allowNull: false,
        type: UUID,
        references: {
          model: 'nooks',
          key: 'id',
        }
      },
      genusId:{
        allowNull: false,
        type: UUID,
        references: {
          model: 'genera',
          key: 'id',
        }
      },
      name: {
        allowNull: false,
        type: STRING
      },
      photo: {
        allowNull: true,
        type: STRING
      },
      health: {
        allowNull: false,
        type: ENUM([...Health])
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('plants');
  }
};