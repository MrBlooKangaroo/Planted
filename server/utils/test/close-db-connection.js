const db = require('../../models');

const closeDbConnection = () => db.sequelize.close();

module.exports = closeDbConnection;
