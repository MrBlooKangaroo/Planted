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
			city: STRING
		},
		{},
  );
  user.associate = function(models) {
    // associations can be defined here
  };
	return user;
};

