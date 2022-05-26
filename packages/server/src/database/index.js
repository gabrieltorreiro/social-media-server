const inicializeModels = require("../models");
const sequelize = require("./sequelize");

async function inicializeDatabase () {
    await sequelize.authenticate();
    await inicializeModels();
    // eslint-disable-next-line no-console
    console.log("Database is connected");
}

module.exports = inicializeDatabase;
