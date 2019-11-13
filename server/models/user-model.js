module.exports = (sequelize, { STRING }) => {
  const user = sequelize.define('user', {
    googleId: STRING,
    firstName: STRING,
    lastName: STRING,
    photoUrl: STRING,
    email: {
      type: STRING,
      unique: true,
    },
  });
  user.associate = models => {
    user.hasMany(models.nook);
    user.hasMany(models.wish);
  };
  return user;
};
