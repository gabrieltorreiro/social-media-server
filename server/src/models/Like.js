const sequelize = require("../database/sequelize");
const { DataTypes } = require('sequelize');

const Like = sequelize.define("like", {
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    PostId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {});

module.exports = Like;