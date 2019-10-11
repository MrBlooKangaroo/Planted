module.exports = (sequelize, DataTypes) => {
	const user = sequelize.define(
		"user",
		{
			nickname: DataTypes.STRING,
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			photo: DataTypes.STRING,
			email: {
				type: DataTypes.STRING,
				unique: true,
			},
			city: DataTypes.STRING,
			userId: DataTypes.UUID
		},
		{},
  );
  user.associate = function(models) {
    user.hasMany(models.nook);
  };
	return user;
};

