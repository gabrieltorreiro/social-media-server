const { Joi } = require('express-validation')

module.exports = {
    show: {
        params: Joi.object({
            id: Joi.number().integer().required()
        })
    },
    create: {
        body: Joi.object({
            title: Joi.string().required(),
            image: Joi.string().optional(),
            description: Joi.string().required()
        })
    },
    update: {
        params: Joi.object({
            id: Joi.number().integer().required()
        }),
        body: Joi.object({
            title: Joi.string().optional(),
            image: Joi.string().optional(),
            description: Joi.string().optional()
        })
    },
    delete: {
        params: Joi.object({
            id: Joi.number().integer().required()
        })
    },
    // Likes
    getAllLikes: {
        params: Joi.object({
            id: Joi.number().integer().required()
        })
    },
    getLikeByUser: {
        params: Joi.object({
            id: Joi.number().integer().required(),
            userId: Joi.number().integer().required()
        })
    },
    createLike: {
        params: Joi.object({
            id: Joi.number().integer().required()
        })
    },
    deleteLike: {
        params: Joi.object({
            id: Joi.number().integer().required()
        })
    },
    // Comments
    getAllComments: {
        params: Joi.object({
            id: Joi.number().integer().required()
        })
    },
    createComment: {
        params: Joi.object({
            id: Joi.number().integer().required()
        }),
        body: Joi.object({
            content: Joi.string().required()
        })
    },
    updateComment: {
        params: Joi.object({
            id: Joi.number().integer().required()
        }),
        body: Joi.object({
            content: Joi.string().required()
        })
    },
    deleteComment: {
        params: Joi.object({
            id: Joi.number().integer().required()
        })
    },
}