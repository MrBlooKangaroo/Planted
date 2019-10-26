module.exports = {
  up: (queryInterface, {
    UUID, DATE, STRING, literal
  }) => {
    return queryInterface.createTable('users', {
      id: {
        type: UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: literal('uuid_generate_v4()')
      },
      createdAt: {
        allowNull: false,
        type: DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DATE,
      },
      firstName: {
        allowNull: false,
        type: STRING,
      },
      lastName: {
        allowNull: false,
        type: STRING,
      },
      nickname: {
        allowNull: true,
        type: STRING,
      },
      photoUrl: {
        allowNull: true,
        type: STRING,
      },
      email: {
        allowNull: false,
        type: STRING,
        unique: true,
      },
    });
  },
  down: queryInterface =>
    queryInterface.dropTable('users')
};
