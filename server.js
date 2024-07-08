require('dotenv').config();

const app = require('express')();
const paypal = require('paypal-rest-sdk');
const bodyParser = require('body-parser');
const swaggerUI = require('swagger-ui-express');
const cors = require('cors');

const database = require('./database');
require('./models/consumer-user'); // TODO: Consolidate into one index file
require('./models/commercial-user');
require('./models/event');

paypal.configure({
    mode: 'sandbox',
    client_id: process.env.PAYPAL_CLIENT_ID,
    client_secret: process.env.PAYPAL_SECRET,
});

database.sync(); // Make sure the tables in DB are present

// app.use(
//     cors({
//         methods: 'GET,POST,PUT,DELETE',
//     })
// );
app.use(cors());

const routes = require('./routes');

console.log('routes');

app.use(bodyParser.json());
app.use(
    '/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(require('./swagger/swagger-document.json'))
);

app.use('/', routes);

app.get('/', async (request, response) => {
    response.status(202).json({
        message: 'ECHO QUERY STRINGS',
        query: request.query,
    });
});

// app.get('/consumer-user', (req, res) => {
//     console.log('Hit');
// });

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.HOST}:${process.env.PORT}`);
});
