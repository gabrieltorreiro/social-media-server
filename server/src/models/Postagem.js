const sequelize = require("../database/sequelize");
const { DataTypes } = require('sequelize');
// const { uuid: uuidv4 } = require('uuid');

const Postagem = sequelize.define("Postagem", {
    fkUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imagem: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {});

module.exports = Postagem;