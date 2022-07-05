/* eslint-disable no-console */
const { DB_URL } = require("../../config");
const inicializeModels = require("../models");
const sequelize = require("./sequelize");

async function inicializeDatabase () {
    try {
        await sequelize.authenticate();
        await inicializeModels();
        console.log(`Database is connected on ${DB_URL}`);
    } catch (err) {
        console.log("Error connecting to the database: ", err);
    }
}

module.exports = inicializeDatabase;
