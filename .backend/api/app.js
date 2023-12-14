const express = require("express");
const app = express();
// Router imports
const client_connection_router = require("./routes/client_connections/client_connections.router");

// Parse incoming JSON payloads
app.use(express.json());

// Routes
app.use("/client_connect", client_connection_router);

// Not found handler
app.use((req, res, next) => {
    next({
        status: 404,
        message: `Not found: ${req.originalUrl}`
    });
});

// Error handler
app.use((error, req, res, next) => {
    console.error(error);
    const { status = 500, message = 'Something went wrong' } = error;
    res.status(status).json({
        error: message
    });
});

module.exports = app;