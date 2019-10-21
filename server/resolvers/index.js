const resolvers = {
  Query: require('./query-resolver'),
  Mutation: require('./mutation-resolver'),
  Subscription: require('./subscription-resolver'),
  Node: require('./node'),
  Date: require('./date-resolver'),
  
  User: require('./associations/user-associations'),
  Nook: require('./associations/nook-associations'),
  Plant: require('./associations/plant-associations'),
  PlantType: require('./associations/plantType-associations'),
  Watering: require('./associations/watering-associations'),
  Wish: require('./associations/wish-associations')
}

module.exports = resolvers
