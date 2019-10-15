const db = require('../models');
const { raiseNotFoundError } = require('../utils');
const { getBuildNumber } = require('../utils');

exports.user = async (_obj, { id }) => {
  const user = await db.user.findOne({
    where: { id },
    include: [{ model: db.nook }, { model: db.plant }],
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

exports.genus = async (_obj, { id }) => {
  const nook = await db.genus.findByPk(id)
  return nook || raiseNotFoundError()
}

exports.genera = async () => {
  return await db.genus.findAll()
}

exports.watering = async (_obj, { id }) => {
  const watering = await db.watering.findByPk(id)
  return watering || raiseNotFoundError()
}

exports.waterings = async () => {
  return await db.watering.findAll()
}
  
exports.buildNumber = getBuildNumber
