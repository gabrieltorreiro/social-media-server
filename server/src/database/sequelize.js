const { Sequelize } = require('sequelize');
const { DB_URL } = require('../../config');

const sequelize = new Sequelize(DB_URL, {
    logging: false,
})

module.exports = sequelize;