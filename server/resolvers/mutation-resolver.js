const { ApolloError } = require('apollo-server');
const db = require('../models');
const { pubsub, raiseNotFoundError } = require('../utils');
const { authenticateGoogle } = require('../config/passport');
const jwt = require('jsonwebtoken');

exports.createUser = async (obj, { input }) => {
  let user = await db.user.findOne({ where: { email: input.email } });
  if (user) {
    throw new ApolloError('email already in use by another user', 'EMAIL_IN_USE', { status: 119 });
  } else {
    user = await db.user.create({ ...input });
    return { user };
  }
};

exports.createPlant = async (obj, { input }) => {
  const plant = await db.plant.create({ ...input });
  return { plant };
};

exports.createNook = async (obj, { input }) => {
  const nook = await db.nook.create({ ...input });
  return { nook };
};

exports.createWatering = async (obj, { input }) => {
  const watering = await db.watering.create({ ...input });
  return { watering };
};

exports.createWish = async (obj, { input }) => {
  const wish = await db.wish.create({ ...input });
  return { wish };
};

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
        photoUrl: data.profile._json.picture,
      };
      let user = await db.user.findOne({ where: { email: authPayLoad.email } });
      if (!user) {
        user = await db.user.create({ ...authPayLoad });
      }
      const userToken = jwt.sign(user.id, process.env.SECRET_KEY);
      return { token: userToken, user: { ...user.dataValues, accessToken: data.accessToken } };
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
};

exports.deletePlant = async (obj, { id }) => {
  const plant = await db.plant.findOne({
    where: { id },
    include: [db.nook, db.plantType, db.watering]
  })
  if (plant) {

    await db.watering.destroy({
      where: { plantId: id },
      include: db.plant
    })

    await db.plant.destroy({
      where: { id },
      include: [db.nook, db.plantType, db.watering]
    })

    return { plant }
  }
  else {
    return raiseNotFoundError();
  }
}

exports.deleteWatering = async (obj, { id }) => {
  const watering = await db.watering.findOne({
    where: { id },
    include: db.plant
  })

  if (watering) {
    await db.watering.destroy({
      where: { id },
      include: db.plant
    })

    return { watering }

  } else {
    return raiseNotFoundError();
  }
}

exports.deleteNook = async (obj, { id }) => {
  const nook = await db.nook.findOne({
    where: { id },
    include: [db.user, db.plant]
  })

  if (nook) {
    const plants = await db.plant.findAll({
      where: { nookId: id },
      include: [db.nook, db.plantType, db.watering]
    })

    plants.forEach(async plant => {
      await db.watering.destroy({
        where: { plantId: plant.dataValues.id },
        include: db.plant
      })
    })

    await db.plant.destroy({
      where: { nookId: id },
      include: [db.nook, db.plantType, db.watering]
    })

    await db.nook.destroy({
      where: { id },
      include: [db.user, db.plant]
    })

    return { nook }
  } else {
    return raiseNotFoundError();
  }
}

exports.updateNook = async (obj, { id, input }) => {
  const nook = await db.nook.findOne({
    where: { id },
    include: [db.user, db.plant]
  })
  if (nook) {
    await db.nook.update({ ...input }, {
      where: { id: id }
    })

    return { nook }
  } else {
    return raiseNotFoundError();
  }
}