const Sequelize = require('sequelize');
const database = require('../database');

const CommercialUser = require('./commercial-user');

const Event = database.define('Event', {
    organizerID: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.DataTypes.DECIMAL,
        allowNull: false,
    },
    icon: {
        type: Sequelize.DataTypes.BLOB,
        allowNull: true,
    },
    addressID: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
    },
    startTime: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
    },
    endTime: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
    },
    active: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
});

Event.belongsTo(CommercialUser, { foreignKey: 'organizerID' });

module.exports = Event;
