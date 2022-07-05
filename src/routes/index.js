const express = require("express");
const router = express.Router();
const { downloadImage } = require("../services/s3");
const path = require("path");
const { IMAGES_PATH } = require("../../config");

// ROUTERS
router.use("/user", require("./user"));
router.use("/post", require("./post"));
router.get("/image/:imageName", async (req, res, next) => {
    try {
        const { imageName } = req.params;
        const imagesPath = path.join(IMAGES_PATH, imageName);
        if (process.env.NODE_ENV === "development") {
            return res.sendFile(imagesPath);
        }
        const data = await downloadImage(imageName);
        res.set("Content-Type", "image/jpeg").send(data);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
