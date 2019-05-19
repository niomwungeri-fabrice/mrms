"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      isVerified: {
        type: Sequelize.BOOLEAN
      },
      isActive: {
        type: Sequelize.BOOLEAN
      },
      profileImage: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.TEXT
      },
      gender: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING
      },
      googleId: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      twitterId: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      facebookId: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      linkedInId: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};
