const db = require('../models')
const { nooks } = require('./data')
const { getRandomId } = require('../utils')

module.exports = {
  up: async () => {
    const users = await db.user.findAll()
    const nookSeeds = nooks.map(nook => {
      return {
        ...nook,
        userId: getRandomId(users)
      }
    })
    await db.nook.bulkCreate(nookSeeds)
  },
  down: queryInterface => queryInterface.bulkDelete('nooks', null, {})
}