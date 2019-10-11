const { Level } = require('../utils/enums.ts');
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('nooks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
          key: 'id'
        }
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING
      },
      photo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      luxLevel: {
        allowNull: false,
        type: Sequelize.ENUM(...Level)
      }, 
    });
    return await queryInterface.addIndex('users', {
      fields: ['userId', 'name'],
      unique: true,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('nooks');
  }
};