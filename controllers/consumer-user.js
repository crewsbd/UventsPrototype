const { Sequelize, DataTypes, DATE } = require('sequelize');
const database = require('../database');

const createConsumerUser = async (request, response) => {};

/**
 *
 * @param {import('express').Request} request
 * @param {import('express').Response} response
 */
const getConsumerUser = async (request, response) => {
    await database.sync();
    const newConsumerUser = database.models.ConsumerUser.build({
        firstName: 'Brian',
        lastName: 'Crews',
        role: 'consumerUser',
        username: 'bdcrews',
        socialMediaID: 'sag3g3rgg',
        password: 'jfSKLFsd4^453FWDGF',
        passwordReset: false,
        resetTokenExpiration: Date('June 14, 1976'),
        email: 'A@B.com',
        phoneNumber: '123-456-7890',
        eventsAttended: 2,
        eventsHosted: 0,
        gender: 'Male',
    });
    await newConsumerUser.save();
    //database.sync();
    //newConsumerUser.get(1);
    //await newConsumerUser.save();
    response.status(202).json(newConsumerUser.toJSON());
};

const updateConsumerUser = async (request, response) => {};

const deleteConsumerUser = async (request, response) => {};

const searchConsumerUser = async (request, response) => {};

module.exports = {
    createConsumerUser,
    getConsumerUser,
    updateConsumerUser,
    deleteConsumerUser,
    searchConsumerUser,
};
