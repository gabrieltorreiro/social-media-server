const express = require("express");
const router = express.Router();
const { ValidationError } = require("express-validation");
const { downloadImage } = require("../services/s3");
const path = require("path");
const { IMAGES_PATH } = require("@social-media/config");

// ROUTERS
router.use("/user", require("./user"));
router.use("/post", require("./post"));
router.get("/image/:imageName", async (req, res, next) => {
    try {
        const { imageName } = req.params;
        const imagesPath = path.join(IMAGES_PATH, imageName);
        if (process.env.NODE_ENV !== "production") {
            return res.sendFile(imagesPath);
        }
        const data = await downloadImage(imageName);
        res.set("Content-Type", "image/jpeg").send(data);
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
