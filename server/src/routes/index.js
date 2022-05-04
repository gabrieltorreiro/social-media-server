const express = require('express');
const router = express.Router();
const { ValidationError } = require('express-validation');

// ROUTERS

// HANDLE VALIDATION ERRORS
router.use((err, req, res, next) => {
    if (err instanceof ValidationError) {
        return res.status(err.status).json({ error: { message: "Invalid parameters!" } });
    }
    next(err);
})

module.exports = router;