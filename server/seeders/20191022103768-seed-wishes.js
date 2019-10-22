const db = require('../models')

const getRandomId = array =>
  array[Math.floor(Math.random() * array.length)].id

module.exports = {
  up: async () => {
    const users = await db.user.findAll()
    const plantTypes = await db.plantType.findAll()
    const nooks = await db.nook.findAll()

    let wishSeeds = []
    while (wishSeeds.length < 10) {
        let repeat = false
        const userId = getRandomId(users)
        const plantTypeId = getRandomId(plantTypes)
        const nookId = Math.random() > 0.5
            ? getRandomId(nooks) : null
        
        wishSeeds.forEach(seed => {
            if (seed.plantTypeId === plantTypeId
                && seed.userId === userId) {
                    repeat = true
                }
        })

        if (!repeat) {
            wishSeeds.push({ userId, plantTypeId, nookId })
        }
    }
    await db.wish.bulkCreate(wishSeeds)
  },
  down: queryInterface => queryInterface.bulkDelete('wishes', null, {})
}