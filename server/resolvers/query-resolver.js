const db = require('../models');
const { raiseNotFoundError } = require('../utils');
const { getBuildNumber } = require('../utils');

exports.user = async (_obj, { id }) => {
  const user = await db.user.findOne({
    where: { id },
    include: [{ model: db.nook }],
  });
  return user || raiseNotFoundError();
};
  
exports.users = async () => {
  return await db.user.findAll()
}

exports.plant = async (_obj, { id }) => {
  const plant = await db.plant.findByPk(id)
  return plant || raiseNotFoundError()
}

exports.plants = async () => {
  return await db.plant.findAll()
}

exports.nook = async (_obj, { id }) => {
  const nook = await db.nook.findByPk(id)
  return nook || raiseNotFoundError()
}

exports.nooks = async () => {
  return await db.nook.findAll()
}

exports.plantType = async (_obj, { id }) => {
  const plantType = await db.plantType.findByPk(id)
  return plantType || raiseNotFoundError()
}

exports.plantType = async () => {
  return await db.plantType.findAll()
}

exports.buildNumber = getBuildNumber
