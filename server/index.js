const app = require("./src/app");
const { PORT } = require("./src/config");
const inicializeDatabase = require("./src/database");

inicializeDatabase().then(() => {
    app.listen(PORT, () => {
        console.log("Server running...");
    });
});