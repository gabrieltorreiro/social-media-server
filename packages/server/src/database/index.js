/* eslint-disable no-console */
const inicializeModels = require("../models");
const sequelize = require("./sequelize");

async function inicializeDatabase () {
    try {
        await sequelize.authenticate();
        await inicializeModels();
        console.log("Database is connected");
    } catch (err) {
        console.log("Error connecting to the database: ", err);
    }
}

module.exports = inicializeDatabase;
