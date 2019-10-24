module.exports = {
    up: (queryInterface, {
        UUID, DATE, literal
    }) => {
      return queryInterface.createTable('wishes', {
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
            allowNull: true,
            type: DATE
        },
        userId: {
            type: UUID,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        plantTypeId: {
            type: UUID,
            allowNull: false,
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

