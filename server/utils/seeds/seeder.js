const { 
    users, 
    plants,
    nooks, 
    plantTypes 
} = require('./data')

function getRandomId (idArray) {
    console.log('\nrandom\n',
        Math.floor(
            Math.random() 
                * (idArray.length)
        )
    )
    return idArray[
        Math.floor(
            Math.random() 
                * (idArray.length - 1)
        )
    ]
}

module.exports = async db => {
    let //userIds = []
        nookIds = []
        plantIds = []
        plantTypeIds = []
    async function createUsers(userArray) {
        const testArray = await userArray.map(async userSeed => {
            const responseUser = await db.user.create(userSeed)
            nooks.forEach(async nook => {
                await db.nook.create({
                    ...nook,
                    userId: responseUser.id
                })
            })
            return responseUser.id
        })
        // .then(testArray => {
        //     console.log(testArray)
        // })
        // console.log(testArray)
    }
    const userIds = await createUsers(users)
        .then(userIds => {
            // console.log(userIds)
        })  
    // console.log(userIds)    
    // await nooks.forEach(async nook => {
    //     // console.log('\n\n\n\n\n\nhello')
    //     const index = Math.floor(Math.random() * (nooks.length - 1))
    //     // console.log(userIds)
    //     const newNook = await db.nook.create({
    //         ...nook,
    //         userId: userIds[index]
    //     })
    //     // console.log('\n\nNOOK ID\n\n', newNook.id)
    //     nookIds.push(newNook.id)
    // })    
    // await plantTypes.forEach(async plantType => {
    //     const newPlantType = await db.plantType.create(plantType)
    //     plantTypeIds.push(newPlantType.id)
    // })    
    // await plants.forEach(async plant => {
        //     const newPlant = await db.plant.create({
            //         ...plant,
    //         nookId: getRandomId(nookIds),
    //         plantTypeId: getRandomId(plantTypeIds)
    //     })
    //     plantIds.push(newPlant.id)
    // })
    // await waterings.forEach(async watering => {
    //     await db.watering.create({
    //         ...watering,
    //         plantId: getRandomId(plantIds)
    //     })
    // })
}