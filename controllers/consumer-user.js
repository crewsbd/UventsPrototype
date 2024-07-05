const { Sequelize, DataTypes, DATE } = require('sequelize');
const database = require('../database');

/**
 *
 * @param {import('express').Request} request
 * @param {import('express').Response} response
 */
const createConsumerUser = async (request, response) => {
    /*  
    #swagger.parameters['body'] = {
        in: 'body',
        description: 'Add new consumer user.',
        schema: { $ref: '#/components/schemas/ConsumerUser' }
    } 
    */

    try {
        const newConsumerUser = database.models.ConsumerUser.build(
            request.body
        );
        const newRecord = await newConsumerUser.save();
        response.status(201).json(newRecord.toJSON());
    } catch (error) {
        console.log(error);
        response.status(500).json({ ERROR: `Failed to store consumer user` });
    }
};

/**
 *
 * @param {import('express').Request} request
 * @param {import('express').Response} response
 */
const getConsumerUser = async (request, response) => {
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
