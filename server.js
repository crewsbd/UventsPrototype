require('dotenv').config();

const app = require('express')();






app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.HOST}:${process.env.PORT}`);
});
