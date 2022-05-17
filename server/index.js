const app = require("./src/app");
const { PORT } = require("./config");
const inicializeDatabase = require("./src/database");

inicializeDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});