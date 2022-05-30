const app = require("./src/app");
const { PORT, API_URL, IMAGES_PATH } = require("@social-media/config");
const inicializeDatabase = require("./src/database");
const fs = require("fs");

inicializeDatabase().then(() => {
    if (!fs.existsSync(IMAGES_PATH)) {
        fs.mkdirSync(IMAGES_PATH);
    }
    app.listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`Server running on: ${API_URL}:${PORT}`);
    });
});
