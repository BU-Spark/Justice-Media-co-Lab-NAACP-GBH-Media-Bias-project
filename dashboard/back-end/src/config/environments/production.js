const production = {
  env: "production",
  port: Number(process.env.PORT) || 9000,
  logLevel: process.env.LOG_LEVEL || "fatal",
  logType: process.env.LOG_TYPE || "logs",
  database: {
    URI: process.env.DATABASE_URI,
  },
};

module.exports = production;
