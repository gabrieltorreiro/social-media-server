const sequelize = require("../database/sequelize");
const { DataTypes } = require('sequelize');

const User = sequelize.define("User", {
    name: {
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

module.exports = User;