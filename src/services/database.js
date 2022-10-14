const Sequelize = require("sequelize");
const { DATABASE_URL, REMOTE_DATABASE_URL } = require("../config");
const sequelize = new Sequelize(REMOTE_DATABASE_URL, {
  logging: (text, time) => {
    console.log("%s %s\n", `SQL (${time}ms)`, text);
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
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
