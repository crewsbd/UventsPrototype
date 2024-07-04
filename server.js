require('dotenv').config();

const app = require('express')();
const database = require('./database');
require('./models/consumer-user');

const routes = require('./routes');

console.log('routes');
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
