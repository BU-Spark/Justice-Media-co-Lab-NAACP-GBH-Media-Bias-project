const mongoose = require("mongoose");
const User = require("../models/User");

const config = require("./environments");

const models = {
  User,
};

const connectToDB = (databaseURI) => {
  const connect = async () => {
    const databaseOptions = {
      useFindAndModify: false,
      bufferMaxEntries: 0,
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      keepAlive: true,
    };

    mongoose.Promise = global.Promise;
    if (config.isDevelopment) {
      mongoose.set("debug", true);
    }
    await mongoose.connect(databaseURI, databaseOptions).catch((error) => {
      console.error(`error creating connection to ${databaseURI}`, error);
      return process.exit(1);
    });
  };
  connect();

  mongoose.connection.on("disconnected", () => {
    console.info(`disconnected from ${databaseURI}`);
    connect();
  });
  mongoose.connection.on("connected", () =>
    console.info(`Monoose connected to ${databaseURI} successfully`)
  );
  mongoose.connection.on("error", console.error);

  return mongoose.connection;
};

module.exports = { models, connectToDB };
