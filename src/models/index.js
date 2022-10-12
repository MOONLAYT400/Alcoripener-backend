const once = require("lodash/once");
const { db, Sequelize } = require("../services/database.js");
const Device = require("./device");
const User = require("./user");

const models = {
  Device: Device.init(db, Sequelize),
  User: User.init(db, Sequelize),
};

function initializeModelsHandler() {
  Object.values(models)
    .filter((model) => typeof model.associate === "function")
    .forEach((model) => model.associate(models));
}

module.exports = {
  initializeModels: once(initializeModelsHandler),
  models,
};
