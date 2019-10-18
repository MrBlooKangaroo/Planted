const { ApolloError } = require('apollo-server')
const db = require('../models')
const { pubsub } = require('../utils')

exports.createUser = async (obj, { input }, { currentUser }, info) => {
  let user = await db.user.findOne({ where: { email: input.email } })
  if (user) {
    throw new ApolloError(
      'email already in use by another user',
      'EMAIL_IN_USE',
      { status: 119 },
    )
  } else {
    user = await db.user.create({ ...input })
    await pubsub.publish('USER_CREATED', { userCreated: user })
    return { user }
  }
}

exports.createPlant = async (obj, { input }, { currentUser }, info) => {
  const plant = await db.plant.create({ ...input })
  await pubsub.publish('PLANT_CREATED', { plantCreated: plant })
  return { plant }
}

exports.createNook = async (obj, { input }, { currentUser }, info) => {
  const nook = await db.nook.create({ ...input })
  await pubsub.publish('NOOK_CREATED', { nookCreated: nook })
  return { nook }
}

exports.createWatering = async (obj, { input }, { currentUser }, info) => {
  const watering = await db.watering.create({ ...input })
  await pubsub.publish('WATERING_CREATED', { wateringCreated: watering })
  return { watering }
}
  