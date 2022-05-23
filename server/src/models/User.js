const sequelize = require("../database/sequelize");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

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
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [6, 60]
        }
    }
}, {
    hooks: {
        beforeCreate: (user) => {
            return new Promise((resolve, reject) => {
                user.password = user.password.toString();
                bcrypt.hash(user.password, 10, (err, hash) => {
                    if (err) {
                        reject(err);
                    }
                    user.password = hash;
                    resolve(user);
                });
            });
        }
    }
});

module.exports = User;
