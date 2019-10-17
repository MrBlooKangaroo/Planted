module.exports = (sequelize, {
	STRING
}) => {
	const user = sequelize.define('user', {
		nickname: STRING,
		firstName: STRING,
		lastName: STRING,
		photoUrl: STRING,
		email: {
			type: STRING,
			unique: true,
		},
	}, {},);
	user.associate = models => {
		user.hasMany(models.nook, { as: 'nooks'});
	};
	return user;
};

