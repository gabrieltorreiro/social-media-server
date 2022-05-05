const Post = require("../models/Post");
const User = require("../models/User");
const Like = require("../models/Like");
const Comment = require("../models/Comment");

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
            if (post.fkUser !== req.auth.id) throw new Error("You are not the owner of this post");
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
    },

    // Like and Unlike
    getAllLikes: async (req, res, next) => {
        try {
            const likes = await Like.findAll({
                where: {
                    fkPost: req.params.id
                }
            });
            if (!likes) throw new Error("No likes found");
            res.json(likes);
        } catch (err) {
            next(err);
        }
    },
    getLikeByUser: async (req, res, next) => {
        try {
            const like = await Like.findOne({
                where: {
                    fkPost: req.params.id,
                    fkUser: req.params.userId
                }
            });
            if (like) return res.json({ like: true });
            res.json({ like: false });
        } catch (err) {
            next(err);
        }
    },
    createLike: async (req, res, next) => {
        try {
            let like = await Like.findOne({
                where: {
                    fkPost: req.params.id,
                    fkUser: req.auth.id
                }
            });
            if (like) throw new Error('Like already exists');
            const user = await User.findByPk(req.auth.id);
            if (!user) throw new Error("User not found");
            const post = await Post.findByPk(req.params.id);
            if (!post) throw new Error("Post not found");
            req.body.fkUser = req.auth.id;
            req.body.fkPost = req.params.id;
            like = await Like.create(req.body);
            res.json(like);
        } catch (err) {
            next(err);
        }
    },
    deleteLike: async (req, res, next) => {
        try {
            const like = await Like.findOne({
                where: {
                    fkUser: req.auth.id,
                    fkPost: req.params.id
                }
            });
            if (!like) throw new Error("Like not found");
            await like.destroy();
            res.json({ deleted: true });
        } catch (err) {
            next(err);
        }
    },

    // Comments
    getAllComments: async (req, res, next) => {
        try {
            const comments = await Comment.findAll({
                where: {
                    fkPost: req.params.id
                }
            });
            if (!comments) throw new Error("No comments found");
            res.json(comments);
        } catch (err) {
            next(err);
        }
    },
    createComment: async (req, res, next) => {
        try {
            const user = await User.findByPk(req.auth.id);
            if (!user) throw new Error("User not found");
            const post = await Post.findByPk(req.params.id);
            if (!post) throw new Error("Post not found");
            req.body.fkUser = req.auth.id;
            req.body.fkPost = req.params.id;
            const comment = await Comment.create(req.body);
            res.json(comment);
        } catch (err) {
            next(err);
        }
    },
    updateComment: async (req, res, next) => {
        try {
            const comment = await Comment.update(req.body, {
                where: {
                    fkPost: req.params.id,
                    fkUser: req.auth.id
                }
            });
            if (!comment[0]) throw new Error("Comment not found");
            res.json({ updated: true });
        } catch (err) {
            next(err);
        }
    },
    deleteComment: async (req, res, next) => {
        try {
            const comment = await Comment.findOne({
                where: {
                    fkUser: req.auth.id,
                    fkPost: req.params.id
                }
            });
            if (!comment) throw new Error("Comment not found");
            await comment.destroy();
            res.json({ deleted: true });
        } catch (err) {
            next(err);
        }
    },
}