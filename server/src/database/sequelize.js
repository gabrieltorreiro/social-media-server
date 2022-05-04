const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    database: 'teste',
    host: 'localhost',
    dialect: 'mysql',
    username: 'root',
    password: 'root',
    logging: false,
})

module.exports = sequelize;