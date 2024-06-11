const Sequelize = require('sequelize');
const database = require('../database');

const Event = database.define('Event', {
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    user: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
});

Event.belongsTo(CommercialUser, {foreignKey: 'commercialUserId'});

module.exports = Event;
