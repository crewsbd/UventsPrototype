const Sequelize = require('sequelize');
const database = require('../database');

const CommercialUser = database.define('CommercialUser', {
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
    },
    category: {
        type: Sequelize.DataTypes.ENUM,
        values: ['CAT1', 'CAT2'],
        defaultValue: 'CAT1',
        allowNull: true,
    },
    address: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    website: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: true,
    },
    picture: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
    },
    socialMedia: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
    },
    thirdPartyPayment: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    verified: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: false,
        allowNull: false,
    },
});

module.exports = CommercialUser;
