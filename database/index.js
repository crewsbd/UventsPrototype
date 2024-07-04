const { Sequelize } = require('sequelize');

const database = new Sequelize({
    dialect: 'sqlite',
    storage: 'Uvents.sqlite',
});

//Test
async function test() {
    try {
        await database.authenticate();
        console.log('SQLite3 connected');
    } catch (error) {
        console.error('SQLite3 connection failed', error);
    }
}
test();

module.exports = database;
