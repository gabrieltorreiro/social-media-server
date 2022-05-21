const { Joi } = require('express-validation')

module.exports = {
    show: {
        params: Joi.object({
            id: Joi.number().integer().required()
        })
    },
    create: {
        body: Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).max(50).required()
        })
    },
    login: {
        body: Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(8).max(50).required()
        })
    },
    verify: {
        body: Joi.object({
            token: Joi.string().uuid().required()
        })
    },
    update: {
        body: Joi.object({
            name: Joi.string().optional(),
            email: Joi.string().email().optional(),
            password: Joi.string().min(8).max(50).optional()
        })
    }
}