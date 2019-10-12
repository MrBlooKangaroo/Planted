const { Level } = require('../utils/enums.ts');

module.exports = {
  up: async (queryInterface, {
    UUID, DATE, STRING, ENUM, literal
  }) => {
    await queryInterface.createTable('nooks', {
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
      name: {
        allowNull: false,
        type: STRING
      },
      location: {
        allowNull: true,
        type: STRING
      },
      photo: {
        allowNull: true,
        type: STRING
      },
      luxLevel: {
        allowNull: false,
        type: ENUM([...Level])
      }, 
    });
    return await queryInterface.addIndex('nooks', {
      fields: ['userId', 'name'],
      unique: true,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('nooks');
  }
};