require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const { ValidationError } = require("express-validation");
const fs = require('fs');

// OPTIONS
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// ROUTERS
app.use(require("./routes"));

// 404
app.use((req, res, next) => {
    const error = new Error("Route not Found");
    error.status = 404;
    next(error);
});

// ERROR HANDLERS
app.use((err, req, res, next) => {
    fs.writeFile('../logs', JSON.stringify(err), 'utf-8');
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json({ error: err });
    }
    res.status(err.status || 500).json({ error: { message: err.message || "Internal server error!" } });
});

module.exports = app;
