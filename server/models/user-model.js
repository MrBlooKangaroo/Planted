

module.exports = (sequelize, {
	STRING
}) => {
	const user = sequelize.define('user', {
		nickname: STRING,
		firstName: STRING,
		lastName: STRING,
		photo: STRING,
		city: STRING,
		email: {
			type: STRING,
			unique: true,
		},
	}, {},);
	user.associate = models => {
		user.hasMany(models.nook);
		user.hasMany(models.plant);
	};
	return user;
};

