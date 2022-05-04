const app = require("./src/app");
const inicializeDatabase = require("./src/database");

inicializeDatabase().then(() => {
    app.listen(5000, () => {
        console.log("Server running...");
    });
});