const db = require('../models');
const { raiseNotFoundError } = require('../utils');

exports.user = async (_obj, input) => {
  const user = await db.user.findOne({
    where: { id: input.id },
    include: db.nook,
  });
  return user || raiseNotFoundError();
};

exports.users = async () => {
  return await db.user.findAll();
};

exports.plant = async (_obj, { id }) => {
  const plant = await db.plant.findOne({
    where: { id },
    include: [db.nook, db.plantType, db.watering],
  });
  return plant || raiseNotFoundError();
};

exports.plants = async () => {
  return await db.plant.findAll();
};

exports.nook = async (_obj, { id }) => {
  const nook = await db.nook.findOne({
    where: { id },
    include: [db.user, db.plant],
  });
  return nook || raiseNotFoundError();
};

exports.nooks = async (_obj, { userId }) => {
  return userId ? await db.nook.findAll() : await db.nook.findAll({ where: userId });
};

exports.plantType = async (_obj, { id }) => {
  const plantType = await db.plantType.findOne({
    where: { id },
    include: db.plant,
  });
  return plantType || raiseNotFoundError();
};

exports.plantTypes = async () => {
  return await db.plantType.findAll();
};

exports.watering = async (_obj, { id }) => {
  const watering = await db.watering.findOne({
    where: { id },
    include: db.plant,
  });
  return watering || raiseNotFoundError();
};

exports.waterings = async () => {
  return await db.watering.findAll();
};

exports.wish = async (_obj, { id }) => {
  const wish = await db.wish.findOne({
    where: { id },
    include: [db.user, db.nook, db.plantType],
  });
  return wish || raiseNotFoundError();
};

exports.wishes = async () => {
  return await db.wish.findAll();
};
