const express = require("express");
const router = express.Router();
const { ValidationError } = require("express-validation");
const fs = require("fs");
const { IMAGES_PATH } = require("../../config");
const path = require("path");

// ROUTERS
router.use("/user", require("./user"));
router.use("/post", require("./post"));
router.get("/image/:imageName", async (req, res, next) => {
    try {
        const { imageName } = req.params;
        if (!fs.existsSync(path.join(IMAGES_PATH, imageName))) { throw new Error("Image not found"); }
        res.sendFile(path.join(IMAGES_PATH, imageName));
    } catch (err) {
        next(err);
    }
});

// HANDLE VALIDATION ERRORS
router.use((err, req, res, next) => {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json({ error: err });
    }
    next(err);
});

module.exports = router;
