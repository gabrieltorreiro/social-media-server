const sequelize = require("../database/sequelize");
const { DataTypes } = require('sequelize');

const Comentario = sequelize.define("Comentario", {
    fkUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fkPostagem: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {});

module.exports = Comentario;