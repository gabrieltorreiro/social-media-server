const app = require("./src/app");
const { PORT } = require("./config");
const inicializeDatabase = require("./src/database");

inicializeDatabase().then(() => {
    app.listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`Server running on port ${PORT}`);
    });
});
