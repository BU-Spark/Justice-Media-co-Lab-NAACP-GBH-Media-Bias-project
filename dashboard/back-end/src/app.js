const express = require("express");
const morgan = require("morgan");
const http = require("http");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");

const routes = require("./routes/v1/index.js");

const envVariables = require("./config/environments");
const logger = require("./config/logger");

const app = express();
const server = http.createServer(app);

app.use(morgan(envVariables.logType, { stream: logger.stream }));

// parse params from the request and appendthem to request.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// compress response bodies for all requests
app.use(compression());
// sett HTTP headers to prevent XSS, and add contentSecurityPolicy,frame gaurd etc.
app.use(helmet());
// setup basic CORS policy
app.use(cors());

// mount api v1 routes
app.use("/api", routes);

module.exports = server;
