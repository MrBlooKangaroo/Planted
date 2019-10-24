const { ApolloError } = require('apollo-server')
const db = require('../models')

exports.createUser = async (obj, { input }) => {
  let user = await db.user.findOne({ where: { email: input.email } })
  if (user) {
    throw new ApolloError(
      'email already in use by another user',
      'EMAIL_IN_USE',
      { status: 119 },
    )
  } else {
    user = await db.user.create({ ...input })
    return { user }
  }
}

exports.createPlant = async (obj, { input }) => {
  const plant = await db.plant.create({ ...input })
  return { plant }
}

exports.createNook = async (obj, { input }) => {
  const nook = await db.nook.create({ ...input })
  return { nook }
}

exports.createWatering = async (obj, { input }) => {
  const watering = await db.watering.create({ ...input })
  return { watering }
}

exports.createWish = async (obj, { input }) => {
  const wish = await db.wish.create({ ...input })
  return { wish }
}  
  