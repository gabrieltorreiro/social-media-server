const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

// OPTIONS
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

// ROUTERS
app.use(require('./routes'));

// ERROR HANDLERS
app.use((err, req, res, next) => {
    if (err) {
        res.status(err.status || 500).json({ error: { message: err.message || "Internal server error!" } });
    } else {
        next();
    }
})

// 404
app.use((req, res) => {
    res.status(404).json({ error: { message: "Route not found!" } });
});

module.exports = app;