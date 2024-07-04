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
    });
    await newConsumerUser.save();
    database.sync();
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
