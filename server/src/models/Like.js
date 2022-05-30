const sequelize = require("../database/sequelize");
const { DataTypes } = require("sequelize");

const Like = sequelize.define("like", {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {});

module.exports = Like;
