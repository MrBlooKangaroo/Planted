module.exports = (sequelize, {
	STRING
}) => {
	const user = sequelize.define('user', {
		firstName: STRING,
		lastName: STRING,
		photoUrl: STRING,
		email: {
			type: STRING,
			unique: true,
		},
	}, {},)
	user.associate = models => {
		user.hasMany(models.nook)
	}
	return user
}

