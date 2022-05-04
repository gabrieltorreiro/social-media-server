const Usuario = require("../models/Usuario");
const jwt = require("jsonwebtoken");

module.exports = {
    index: async (req, res, next) => {
        try {
            const users = await Usuario.findAll();
            if (!users) throw new Error("No users found");
            res.json(users);
        } catch (err) {
            next(err);
        }
    },
    show: async (req, res, next) => {
        try {
            const user = await Usuario.findByPk(req.params.id);
            if (!user) throw new Error("User not found!");
            res.json(user);
        } catch (err) {
            next(err);
        }
    },
    create: async (req, res, next) => {
        try {
            const user = await Usuario.create(req.body);
            res.json(user);
        } catch (err) {
            next(err);
        }
    },
    login: async (req, res, next) => {
        try {
            const user = await Usuario.findOne({ where: { emaiL: req.body.email } });
            if (!user) throw new Error("User not found!");
            if (req.body.password === user.password.toString()) {
                const token = await jwt.sign({ id: user.id }, "secret", { expiresIn: "1h" });
                return res.json({ login: true, token });
            }
            return res.json({ error: { message: "Wrong password!" } });
        } catch (err) {
            next(err);
        }
    },
    update: async (req, res, next) => {
        try {

            const user = await Usuario.update(req.body, {
                where: {
                    id: req.auth.id
                }
            })
            if (!user[0]) throw new Error("User not found!");
            res.json({ updated: true });
        } catch (err) {
            next(err);
        }
    },
    delete: async (req, res, next) => {
        try {
            const user = await Usuario.findByPk(req.auth.id);
            if (!user) throw new Error("User not found!");
            await user.destroy();
            res.json({ deleted: true });
        } catch (err) {
            next(err);
        }
    }
}