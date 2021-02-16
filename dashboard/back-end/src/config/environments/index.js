const developmentConfig = require("./development");
const stagingConfig = require("./development");
const productionConfig = require("./development");

const environment = process.env.NODE_ENV;
const Production = process.env.NODE_ENV === "production";
const development = process.env.NODE_ENV === "development";

let environmentConfig;
switch (environment) {
  case "development":
    environmentConfig = developmentConfig;
    break;
  case "staging":
    environmentConfig = stagingConfig;
    break;
  case "production":
    environmentConfig = productionConfig;
    break;
  default:
    environmentConfig = developmentConfig;
    break;
}

const configuration = {
  ...environmentConfig,
  isProduction: Production,
  isDevelopment: development,
};
module.exports = configuration;
