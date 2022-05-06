const sequelize = require("../database/sequelize");
const { DataTypes } = require('sequelize');

const Comment = sequelize.define("Comment", {
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    PostId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {});

module.exports = Comment;