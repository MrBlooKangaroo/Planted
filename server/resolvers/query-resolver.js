const db = require('../models');
const { raiseNotFoundError } = require('../utils');
const { getBuildNumber } = require('../utils');

exports.user = async (_obj, { id }) => {
  const user = await db.user.findByPk(id);
  return user || raiseNotFoundError();
};

exports.users = async () => {
  return await db.user.findAll();
};

exports.buildNumber = getBuildNumber;
