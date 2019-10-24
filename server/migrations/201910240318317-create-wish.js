module.exports = {
    up: async (queryInterface, {
      UUID, DATE, literal
    }) => {
      return await queryInterface.createTable('wishes', {
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
        userId: {
          allowNull: false,
          type: UUID,
          references: {
            model: 'users',
            key: 'id'
          }
        },
        plantTypeId: {
            allowNull: false,
            type: UUID,
            references: {
                model: 'plantTypes',
                key: 'id'
            }
        },
        nookId: {
            allowNull: true,
            type: UUID,
            references: {
                model: 'nooks',
                key: 'id'
            }
        }
    })
},
    down: queryInterface =>
      queryInterface.dropTable('wishes')
  }