const db = require('../models')
const { raiseNotFoundError, getBuildNumber } = require('../utils')

exports.user = async (_obj, input) => {
  const user = await db.user.findOne({
    where: { id: input.id },
    include: db.nook
  })
  return user || raiseNotFoundError()
}
  
exports.users = async (_obj, inputs, test, test3 ) => {
  return await db.user.findAll()
}

exports.plant = async (_obj, { id }) => {
  const plant = await db.plant.findOne({
    where: { id },
    include: [db.nook, db.plantType, db.watering]
  })
  return plant || raiseNotFoundError()
}

exports.plants = async () => {
  return await db.plant.findAll()
}

exports.nook = async (_obj, { id }) => {
  const nook = await db.nook.findOne({
    where: { id },
    include: [db.user, db.plant]
  })
  return nook || raiseNotFoundError()
}

exports.nooks = async () => {
  return await db.nook.findAll()
}

exports.plantType = async (_obj, { id }) => {
  const plantType = await db.plantType.findOne({
    where: { id },
    include: db.plant
  })
  return plantType || raiseNotFoundError()
}

exports.plantTypes = async () => {
  return await db.plantType.findAll()
}

exports.watering = async (_obj, { id }) => {
  const watering = await db.watering.findOne({
    where: { id },
    include: db.plant
  })
  return watering || raiseNotFoundError()
}

exports.waterings = async () => {
  return await db.watering.findAll()
}

exports.buildNumber = getBuildNumber
