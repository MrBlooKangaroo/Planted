const { pubsub } = require('../utils');

exports.userCreated = {
  subscribe: () => pubsub.asyncIterator('USER_CREATED'),
};
