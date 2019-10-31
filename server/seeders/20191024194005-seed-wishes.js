const db = require('../models')
const { getRandomId } = require('../utils')

module.exports = {
  up: async () => {
    let wishSeeds = []
    const users = await db.user.findAll()
    const plantTypes = await db.plantType.findAll()
    const nooks = await db.nook.findAll()
    while (wishSeeds.length < 10) {
      const userId = getRandomId(users)
      const plantTypeId = getRandomId(plantTypes)
      const nookId = Math.random() > 0.5
        ? getRandomId(nooks) : null
      const isAlreadyAdded = wishSeeds.some(seed =>
        seed.plantTypeId === plantTypeId && seed.userId === userId
      )
      if (!isAlreadyAdded) {
        wishSeeds.push({ 
          userId, 
          plantTypeId, 
          nookId 
        })
      }
    }
    await db.wish.bulkCreate(wishSeeds)
  },
  down: queryInterface => queryInterface.bulkDelete('wishes', null, {})
}
