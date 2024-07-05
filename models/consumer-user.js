const Sequelize = require('sequelize');
const database = require('../database');

const ConsumerUser = database.define('ConsumerUser', {
    firstName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: Sequelize.DataTypes.ENUM,
        values: ['consumerUser, commercialUser, adminUser'],
        defaultValue: 'consumerUser',
        allowNull: false,
    },
    username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    socialMediaID: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    passwordReset: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: true,
    },
    resetTokenExpiration: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true,
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    eventsAttended: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
    },
    eventsHosted: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
    },
    gender: {
        type: Sequelize.DataTypes.ENUM,
        values: ['male', 'female', 'unspecified'],
        defaultValue: 'unspecified',
        allowNull: false,
    },
});

module.exports = ConsumerUser;
