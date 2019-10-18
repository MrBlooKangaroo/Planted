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
    let newUserIds = []

    users.forEach(async userSeed => {
        const responseUser = await db.user.create(userSeed)
        newUserIds.push(responseUser.id)
        
        if (newUserIds.length == users.length) {
            await nooks.forEach(async nook => {
                await db.nook.create({
                    ...nook,
                    userId: newUserIds[
                        Math.floor(Math.random() 
                            * (newUserIds.length - 1))
                    ]
                })
            })
        }
    })
}