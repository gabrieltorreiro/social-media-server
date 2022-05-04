const Post = require("../models/Post");
const User = require("../models/User");

module.exports = {
    index: async (req, res, next) => {
        try {
            const posts = await Post.findAll();
            if (!posts) throw new InternalServerError();
            res.json(posts);
        } catch (err) {
            next(err);
        }
    },
    show: async (req, res, next) => {
        try {
            const post = await Post.findByPk(req.params.id);
            if (!post) throw new Error("Post not found");
            res.json(post);
        } catch (err) {
            next(err);
        }
    },
    create: async (req, res, next) => {
        try {
            const user = await User.findByPk(req.auth.id);
            if (!user) throw new Error("User not found");
            req.body.fkUser = req.auth.id;
            const post = await Post.create(req.body);
            res.json(post);
        } catch (err) {
            next(err);
        }
    },
    update: async (req, res, next) => {
        try {
            let post = await Post.findByPk(req.params.id);
            if (!post) throw new Error("Post not found");
            if (post.fkUsuario !== req.auth.id) throw new Error("You are not the owner of this post");
            await post.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            res.json({ updated: true });
        } catch (err) {
            next(err);
        }
    },
    delete: async (req, res, next) => {
        try {
            const post = await Post.findByPk(req.params.id);
            if (!post) throw new Error("Post not found");
            if (post.fkUser !== req.auth.id) throw new Error("You are not the owner of this post");
            await post.destroy();
            res.json({ deleted: true });
        } catch (err) {
            next(err);
        }
    }
}