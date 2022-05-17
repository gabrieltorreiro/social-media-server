const path = require('path');

module.exports = {
    PORT: process.env.PORT || 5000,
    DB_URL: process.env.DB_URL || "mysql://root:root@localhost:3306/teste",
    JWT_SECRET: process.env.JWT_SECRET || "secret",
    IMAGES_PATH: path.join(__dirname, process.env.IMAGES_PATH || "uploads"),
}