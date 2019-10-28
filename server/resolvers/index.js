const resolvers = {
  Query: require('./query-resolver'),
  Mutation: require('./mutation-resolver'),
  Node: require('./node'),
  Date: require('./date-resolver'),
  
  User: require('./associations/user-associations'),
  Nook: require('./associations/nook-associations'),
  Plant: require('./associations/plant-associations'),
  PlantType: require('./associations/plantType-associations'),
  Watering: require('./associations/watering-associations')
}

module.exports = resolvers
