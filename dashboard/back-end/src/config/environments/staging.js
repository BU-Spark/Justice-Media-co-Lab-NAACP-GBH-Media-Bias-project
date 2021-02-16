const staging = {
  env: "staging",
  port: Number(process.env.PORT) || 9000,
  logLevel: process.env.LOG_LEVEL || "fatal",
  logType: process.env.LOG_TYPE || "combined",
  database: {
    URI: process.env.DATABASE_URI,
  },
};

module.exports = staging;
