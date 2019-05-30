const db = require('../../models');
const tableNames = ['users'];

const cleanUpDb = async done => {
  const queryInterface = db.sequelize.getQueryInterface();
  const addForeignKeyCallbacks = await tableNames.reduce(
    async (addForeignKeyCallbacksPromise, tableName) => {
      const foreignKeyReferences = await queryInterface.getForeignKeyReferencesForTable(
        tableName,
      );

      const addForeignKeyCallbacks = foreignKeyReferences.map(
        ({
          columnName,
          constraintName,
          referencedTableName,
          referencedColumnName,
        }) =>
          queryInterface
            .removeConstraint(tableName, constraintName)
            .then(() => () =>
              queryInterface.addConstraint(tableName, [columnName], {
                type: 'foreign key',
                references: {
                  table: referencedTableName,
                  field: referencedColumnName,
                },
              }),
            ),
      );
      const previousCallbacks = await addForeignKeyCallbacksPromise;
      const callbacks = await Promise.all(addForeignKeyCallbacks);

      return [...previousCallbacks, ...callbacks];
    },
    Promise.resolve([]),
  );

  await db.sequelize.truncate();
  await Promise.all(addForeignKeyCallbacks.map(callback => callback()));
  done();
};

module.exports = cleanUpDb;
