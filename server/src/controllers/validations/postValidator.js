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
    }
}