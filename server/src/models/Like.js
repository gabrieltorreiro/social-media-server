const sequelize = require("../database/sequelize");
const { DataTypes } = require('sequelize');

const Like = sequelize.define("Like", {
    fkUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fkPostagem: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {});

module.exports = Like;