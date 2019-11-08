module.exports = {
  up: (queryInterface, { UUID, DATE, literal }) => {
    return queryInterface.createTable('waterings', {
      id: {
        type: UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: literal('uuid_generate_v4()'),
      },
      plantId: {
        type: UUID,
        allowNull: false,
        references: {
          model: 'plants',
          key: 'id',
        },
      },
      expectedAt: {
        allowNull: false,
        type: DATE,
      },
      executedAt: {
        allowNull: true,
        type: DATE,
      },
    });
  },
  down: queryInterface => queryInterface.dropTable('waterings'),
};
