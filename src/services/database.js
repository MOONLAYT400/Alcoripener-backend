const Sequelize = require("sequelize");
const { DATABASE_URL } = require("../config");
const sequelize = new Sequelize(DATABASE_URL, {
  logging: (text, time) => {
    console.log("%s %s\n", `SQL (${time}ms)`, text);
  },
});

module.exports = {
  doInTransaction: (callback, transaction) => {
    return transaction
      ? callback(transaction)
      : sequelize.transaction(callback);
  },
  Sequelize,
  db: sequelize,
};
