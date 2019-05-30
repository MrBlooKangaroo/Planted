const resolvers = {
  Query: require('./query-resolver'),
  Mutation: require('./mutation-resolver'),
  Subscription: require('./subscription-resolver'),
  Node: require('./node'),
  Date: require('./date-resolver'),
};

module.exports = resolvers;
