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
    const userNookAssociations = {
        
    }
    async function createUsers(userArray) {
        let i = 0
        let newUserArray = []
        const getUserArray = async () => {
            return await userArray.map(async userSeed => {
                const responseUser = await db.user.create(userSeed)
                newUserArray.push(responseUser.id)
                // console.log(newUserArray)

                if (newUserArray.length == userArray.length) {
                    await nooks.forEach(async nook => {
                        const index = Math.floor(Math.random() * (nooks.length - 1))
                        if (Math.random() > 0.66) {
                            await db.nook.create({
                                ...nook,
                                userId: responseUser.id
                            })
                        }
                    }) //.then(test => { console.log(test)})
                    console.log(newUserArray)
                }
                    
                return responseUser.id
            })
            console.log(newUserArray)
            return newUserArray
        }
        const test = await getUserArray() //.then(test2 => { console.log(test2, newUserArray)})
        // console.log(await test)
    }
    await createUsers(users) //.then(test3 => { console.log(test3)})
    // console.log(await db.user.findAll())
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