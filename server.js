require('dotenv').config();

const app = require('express')();


console.log('routes');

app.get('/', async (request, response) => {
    response.status(202).json({ 
        message: "ECHO QUERY STRINGS",
        query: request.query });
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.HOST}:${process.env.PORT}`);
});
