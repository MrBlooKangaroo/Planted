const db = require('../models');
const { raiseNotFoundError, getBuildNumber } = require('../utils');

exports.user = async (_obj, { id }) => {
  const user = await db.user.findByPk(id)
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

exports.plantType = async (_obj, { name }) => {
  const plantType = await db.plantType.findAll({
  where: {
    name
  }
});
  return plantType || raiseNotFoundError()
}

exports.plantTypes = async () => {
  return await db.plantType.findAll()
}

exports.watering = async (_obj, { id }) => {
  const watering = await db.watering.findByPk(id)
  return watering || raiseNotFoundError()
}

exports.waterings = async () => {
  return await db.watering.findAll()
}

exports.buildNumber = getBuildNumber
