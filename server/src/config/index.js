module.exports = {
    PORT: process.env.PORT || 5000,
    DB_URL: process.env.DB_URL || "mysql://root:root@localhost:3306/teste",
    JWT_SECRET: process.env.JWT_SECRET || "secret",
}