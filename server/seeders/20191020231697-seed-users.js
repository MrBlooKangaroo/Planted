const db = require('../models')
const { users } = require('./data')

users.forEach(user =>
  Object.assign(user, { createdAt: new Date() })
)

module.exports = {
  up: async () => db.user.bulkCreate(users),
  down: queryInterface => queryInterface.bulkDelete('users', null, {}),
}