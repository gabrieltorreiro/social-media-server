const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config");
const bcrypt = require("bcrypt");

module.exports = {
    index: async (req, res, next) => {
        try {
            const users = await User.findAll({
                attributes: { exclude: ["password"] }
            });
            if (!users) throw new Error("No users found");
            res.json(users);
        } catch (err) {
            next(err);
        }
    },
    show: async (req, res, next) => {
        try {
            const user = await User.findByPk(req.params.id, {
                attributes: { exclude: ["password"] }
            });
            if (!user) throw new Error("User not found!");
            res.json(user);
        } catch (err) {
            next(err);
        }
    },
    create: async (req, res, next) => {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            next(err);
        }
    },
    login: async (req, res, next) => {
        try {
            const user = await User.findOne({ where: { emaiL: req.body.email } });
            if (!user) throw new Error("User not found!");
            if (bcrypt.compareSync(req.body.password, user.password)) {
                const token = await jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1d" });
                return res.json({ token });
            }
            return res.status(400).json({ error: { message: "Wrong password!" } });
        } catch (err) {
            next(err);
        }
    },
    verify: async (req, res, next) => {
        try {
            const { token } = req.body;
            jwt.verify(token, JWT_SECRET);
            res.json({ valid: true });
        } catch (err) {
            res.json({ valid: false });
        }
    },
    update: async (req, res, next) => {
        try {
            const user = await User.update(req.body, {
                where: {
                    id: req.auth.id
                }
            });
            if (!user[0]) throw new Error("User not found!");
            res.json({ updated: true });
        } catch (err) {
            next(err);
        }
    },
    delete: async (req, res, next) => {
        try {
            const user = await User.findByPk(req.auth.id);
            if (!user) throw new Error("User not found!");
            await user.destroy();
            res.json({ deleted: true });
        } catch (err) {
            next(err);
        }
    }
};
