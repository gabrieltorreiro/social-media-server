const sequelize = require("../database/sequelize");
const { DataTypes } = require('sequelize');

const Post = sequelize.define("Post", {
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {});

module.exports = Post;