const { ApolloError } = require('apollo-server');
const db = require('../models');
const { pubsub } = require('../utils');

exports.createUser = async (obj, { input }, { currentUser }, info) => {
  let user = await db.user.findOne({ where: { email: input.email } });
  if (user) {
    throw new ApolloError(
      'email already in use by another user',
      'EMAIL_IN_USE',
      { status: 119 },
    );
  } else {
    user = await db.user.create({ ...input });
    await pubsub.publish('USER_CREATED', { userCreated: user });
    return { user };
  }
};
