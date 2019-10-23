const resolvers = {
  Query: require('./query-resolver'),
  Mutation: require('./mutation-resolver'),
  Node: require('./node'),
  Date: require('./date-resolver')
}

module.exports = resolvers
