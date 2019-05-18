"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: { allowNull: false, unique: true, type: DataTypes.STRING },
      username: { allowNull: false, unique: true, type: DataTypes.STRING },
      isVerified: DataTypes.BOOLEAN,
      isActive: DataTypes.BOOLEAN,
      profileImage: DataTypes.STRING,
      bio: { type: DataTypes.TEXT },
      gender: DataTypes.STRING,
      phone: { unique: true, type: DataTypes.STRING },
      address: DataTypes.STRING,
      googleId: { unique: true, type: DataTypes.STRING },
      twitterId: { unique: true, type: DataTypes.STRING },
      facebookId: { unique: true, type: DataTypes.STRING },
      linkedInId: { unique: true, type: DataTypes.STRING }
    },
    { tableName: "users" }
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
