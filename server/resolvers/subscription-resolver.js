const { pubsub } = require('../utils');

exports.userCreated = {
  subscribe: () => pubsub.asyncIterator('USER_CREATED'),
};

exports.plantCreated = {
  subscribe: () => pubsub.asyncIterator('PLANT_CREATED')
}

exports.nookCreated = {
  subscribe: () => pubsub.asyncIterator('NOOK_CREATED')
}

exports.wateringCreated = {
  subscribe: () => pubsub.asyncIterator('WATERING_CREATED')
}
