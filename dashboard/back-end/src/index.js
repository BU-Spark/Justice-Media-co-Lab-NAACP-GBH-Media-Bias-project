const dotenv = require("dotenv");

dotenv.config({});

const app = require("./app");
const { connectToDB } = require("./config/database");
const config = require("./config/environments");
const logger = require("./config/logger");

const { port, env, database } = config;

connectToDB(database.URI);

app.listen(port, () => logger.info(`server started on port ${port} (${env})`));

/**
 * Exports express
 * @public
 */
module.exports = app;
