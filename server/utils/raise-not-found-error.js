const { ApolloError } = require('apollo-server');

const raiseNotFoundError = (message, properties) => {
  throw new ApolloError(message, 'NOT_FOUND', { ...properties, status: 132 });
};

module.exports = raiseNotFoundError;
