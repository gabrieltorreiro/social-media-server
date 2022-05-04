const express = require('express');
const router = express.Router();
const { ValidationError } = require('express-validation');

// ROUTERS
router.use('/user', require('./user'));

// HANDLE VALIDATION ERRORS
router.use((err, req, res, next) => {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json({ error: { message: "Invalid parameters!" } });
    }
    next(err);
})

module.exports = router;