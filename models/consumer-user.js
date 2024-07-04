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
});

//Event.belongsTo(CommercialUser, {foreignKey: 'commercialUserId'});
database.sync().then(() => {
    console.log('Models synced');
});

module.exports = ConsumerUser;
