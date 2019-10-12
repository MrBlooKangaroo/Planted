const { Level } = require('../utils/enums.ts');

module.exports = {
  up: (queryInterface, {
    UUID, DATE, ENUM, literal
  }) => {
    return queryInterface.createTable('waterings', {
      id: {
        type: UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: literal('uuid_generate_v4()'),
      },
      expectedAt: {
        allowNull: false,
        type: DATE
      },
      executedAt: {
        allowNull: true,
        type: DATE
      },
      // plantId:{       TODO
      //   type: UUID,
      //   allowNull: false,
      //   references: {
      //     model: 'plants',
      //     key: 'id',
      //   }
      // },
      priority: {
        allowNull: false,
        type: ENUM([...Level])
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('waterings');
  }
};