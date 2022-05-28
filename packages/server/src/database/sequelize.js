const { Sequelize } = require("sequelize");
const { DB_URL } = require("@social-media/config");

const sequelize = new Sequelize(DB_URL, {
    logging: false
});

module.exports = sequelize;
