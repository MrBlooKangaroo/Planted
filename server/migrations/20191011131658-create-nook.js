const { Level } = require('../utils/enums.ts');
'use strict';
//console.log(Level);
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('nooks', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId:{
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'users',
          key: 'id',
        }
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      location: {
        allowNull: true,
        type: Sequelize.STRING
      },
      photo: {
        allowNull: true,
        type: Sequelize.STRING
      },
      luxLevel: {
        allowNull: false,
        type: Sequelize.ENUM([...Level])
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