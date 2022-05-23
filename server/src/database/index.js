const inicializeModels = require("../models");
const sequelize = require("./sequelize");

async function inicializeDatabase () {
    await sequelize.authenticate();
    await inicializeModels();
    console.log("Database is connected");
}

module.exports = inicializeDatabase;
