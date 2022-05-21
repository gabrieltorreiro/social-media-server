const sequelize = require("../database/sequelize");
const { DataTypes } = require('sequelize');

const User = sequelize.define("user", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [2, 50]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    password: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {});

module.exports = User;