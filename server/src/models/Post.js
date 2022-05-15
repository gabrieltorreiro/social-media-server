const sequelize = require("../database/sequelize");
const { DataTypes } = require('sequelize');

const Post = sequelize.define("post", {
    userId: {
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