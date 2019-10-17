const { users, nooks, plantTypes } = require('./data')

module.exports = db => {
    users.forEach(user => {
        db.user.create({...user})
    })

    plantTypes.forEach(plantType => {
        db.plantType.create({...plantType})
    })
}