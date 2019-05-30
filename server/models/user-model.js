module.exports = (sequelize, DataTypes) => {
	const user = sequelize.define(
		"user",
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: {
				type: DataTypes.STRING,
				unique: true,
			},
		},
		{},
  );
  user.associate = function(models) {
    // associations can be defined here
  };
	return user;
};

