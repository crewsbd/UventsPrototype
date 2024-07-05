const { Sequelize, DataTypes, DATE } = require('sequelize');
const database = require('../database');

/**
 * Insert the provided consumer user to the database
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
        return response.status(201).json(newRecord.toJSON());
    } catch (error) {
        console.log(error);
        return response
            .status(500)
            .json({ ERROR: `Failed to store consumer user` });
    }
};

/**
 * Retrieve the requested consumer user by id from the database
 * @param {import('express').Request} request
 * @param {import('express').Response} response
 */
const getConsumerUser = async (request, response) => {
    /* #swagger.parameters['id'] = {
        description: 'Retrieve consumer user.' }, */

    const id = request.params.id;
    try {
        const consumerUser = await database.models.ConsumerUser.findByPk(id);
        /* #swagger.responses[200] = {
                description: 'Got a specific user.',
                schema: { $ref: '#/components/schemas/ConsumerUser' }} */
        return response.status(200).json(consumerUser.toJSON());
    } catch (error) {
        /* #swagger.responses[404] = {
                    description: 'Failed to get a specific user.' } */
        return response
            .status(404)
            .json({ ERROR: `Failed to find consumer user id: ${id}` });
    }
};

/**
 * Update the requested consumer user by id in the database
 * @param {import('express').Request} request
 * @param {import('express').Response} response
 */
const updateConsumerUser = async (request, response) => {
    /*  
    #swagger.parameters['body'] = {
        in: 'body',
        description: 'Update consumer user',
        schema: { $ref: '#/components/schemas/ConsumerUser' }}
    #swagger.parameters['id'] = {
        description: 'Consumer user id',
        type: 'integer' }
    } 
    */
    const id = request.params.id;
    try {
        const consumerUser = await database.models.ConsumerUser.findByPk(id);
        await consumerUser.update(request.body);
        return response.status(200).json(consumerUser.toJSON());
    } catch (error) {
        console.log(error);
        return response.status(500).json({ ERROR: `An error occured` });
    }
};

/**
 * Delete the requested consumer user by id from the database
 * @param {import('express').Request} request
 * @param {import('express').Response} response
 */
const deleteConsumerUser = async (request, response) => {
    const id = request.params.id;
    try {
        const consumerUser = await database.models.ConsumerUser.findByPk(id);
        consumerUser.destroy();
        response
            .status(200)
            .json({ MESSAGE: `Consumer User ${id} successfully deleted` });
    } catch (error) {
        response.status(400).json({ ERROR: `Failed to delete user ${id}` });
        console.log(error);
    }
};

/**
 * Search for the requested consumer user by id in the database
 * @param {import('express').Request} request
 * @param {import('express').Response} response
 */
const searchConsumerUser = async (request, response) => {
    /*  
    #swagger.parameters['body'] = {
        in: 'body',
        description: 'Search for a consumer user.',
        schema: {   $field: 'firstName',
                    $value: 'John'
                }
    } 
    */
    console.log('SEARCHING');
    if (request.body.field && request.body.value) {
        const searchField = request.body.field;
        const searchValue = request.body.value;
        try {
            const consumerUsers = await database.models.ConsumerUser.findAll({
                where: {
                    [searchField]: searchValue,
                },
            });
            if (consumerUsers) {
                return response.status(201).json(consumerUsers);
            } else {
                return response
                    .status(404)
                    .json({ ERROR: `No consumer users found` });
            }
        } catch (error) {
            console.log(error);
            return response.status(500).json({ ERROR: `Something went wrong` });
        }
    } else {
        console.log('Missing search params');
        return response
            .status(404)
            .json({ ERROR: `Missing or malformed search` });
    }
};

module.exports = {
    createConsumerUser,
    getConsumerUser,
    updateConsumerUser,
    deleteConsumerUser,
    searchConsumerUser,
};
