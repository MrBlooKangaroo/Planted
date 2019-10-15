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
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('waterings');
  }
};