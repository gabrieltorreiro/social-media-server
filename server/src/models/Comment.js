const sequelize = require("../database/sequelize");
const { DataTypes } = require('sequelize');

const Comment = sequelize.define("comment", {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
}, {});

module.exports = Comment;