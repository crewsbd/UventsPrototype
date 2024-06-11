const Sequelize = require("sequelize");

const database = new Sequelize.Sequelize(
  process.env.DB_URI,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST,
    dialect: "postgres",
  }
);

module.exports = database;
