const db = require('../../models')
const { 
    users, 
    plants,
    nooks, 
    plantTypes,
    waterings
} = require('./data')

const getRandomId = ids =>
    ids[Math.floor(Math.random() * (ids.length - 1))]

const seeder = async db => {
    let newUserIds = []
        newNookIds = []
        newPlantIds = []
        newPlantTypeIds = []

    plantTypes.forEach(async plantType => {
        const responsePlantType = await db.plantType.create(plantType)
        newPlantTypeIds.push(responsePlantType.id)
    })

    users.forEach(async user => {
        const responseUser = await db.user.create(user)
        newUserIds.push(responseUser.id)

        if (newUserIds.length === users.length) {
            nooks.forEach(async nook => {
                const responseNook = await db.nook.create({
                    ...nook,
                    userId: getRandomId(newUserIds)
                })
                newNookIds.push(responseNook.id)

                if(newNookIds.length === nooks.length) {
                    plants.forEach(async plant => {
                        const responsePlant = await db.plant.create({
                            ...plant,
                            nookId: getRandomId(newNookIds),
                            plantTypeId: getRandomId(newPlantTypeIds)
                        })
                        newPlantIds.push(responsePlant.id)

                        if(newPlantIds.length === plants.length) {
                            waterings.forEach( async watering => {
                                await db.watering.create({
                                    ...watering,
                                    plantId: getRandomId(newPlantIds)
                                })
                            })
                        }
                    })
                }
            })
        }
    })
}

seeder(db)