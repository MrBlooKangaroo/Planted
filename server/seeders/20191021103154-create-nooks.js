const db = require('../models')
const { nooks } = require('./data')

const getRandomId = array =>
    array[Math.floor(Math.random() * array.length)].id

module.exports = {
  up: async () => {
    const users = await db.user.findAll()
    const nookSeeds = nooks.forEach(nook => {
        return {
            ...nook,
            userId: getRandomId(users)
        }
    })
    await db.nook.bulkCreate(nookSeeds)
  },
  down: queryInterface => queryInterface.bulkDelete('nooks', null, {}),
}