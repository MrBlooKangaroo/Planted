const { ApolloError } = require('apollo-server')
const db = require('../models')
const { pubsub } = require('../utils')
const { authenticateGoogle } = require('../config/passport');
const jwt = require('jsonwebtoken')

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

exports.createPlant = async (obj, { input }) => {
  const plant = await db.plant.create({ ...input })
  return { plant }
}

exports.createNook = async (obj, { input }) => {
  const nook = await db.nook.create({ ...input })
  return { nook }
}

exports.createWatering = async (obj, { input }) => {
  const watering = await db.watering.create({ ...input })
  return { watering }
}

exports.createWish = async (obj, { input }) => {
  const wish = await db.wish.create({ ...input })
  return { wish }
}



exports.authGoogle = async (_, { input: { accessToken } }, { req, res }) => {
  req.body = {
    ...req.body,
    access_token: accessToken,
  };

  try {
    const { data, info } = await authenticateGoogle(req, res);
    if (data) {
      const authPayLoad = {
        googleId: data.profile._json.id,
        firstName: data.profile._json.given_name,
        lastName: data.profile._json.family_name,
        email: data.profile._json.email,
        photoUrl: data.profile._json.picture
      }
      let user = await db.user.findOne({ where: { email: authPayLoad.email } })
      if (!user) {
        user = await db.user.create({ ...authPayLoad });
      }
      const userToken = jwt.sign(user.id, process.env.SECRET_KEY)
      console.log(userToken)
      return { token: userToken, user: { ...user.dataValues, accessToken: data.accessToken } }
    }

    if (info) {
      switch (info.code) {
        case 'ETIMEDOUT':
          return new Error('Failed to reach Google: Try Again');
        default:
          return new Error('something went wrong');
      }
    }
    return Error('server error');
  } catch (error) {
    return error;
  }
}
