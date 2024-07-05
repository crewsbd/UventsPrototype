const swagger = require('swagger-autogen')();
const consumerUserSchema = require('../JSONSchemas/consumerUser.json');

const document = {
    info: {
        title: 'Uvents API',
        description: 'An API to perform CRUD operations on the Uvents.',
    },
    host: 'localhost:3000',
    schemes: ['http'],
    components: {
        schemas: {
            ConsumerUser: consumerUserSchema,
        },
    },
    definitions: {},
};

swagger('./swagger/swagger-document.json', ['./routes/index.js'], document);
