const sequelize = require("../database/sequelize");
const { DataTypes } = require('sequelize');

const Usuario = sequelize.define("Usuario", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {});

module.exports = Usuario;