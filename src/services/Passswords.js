const bcrypt = require("bcrypt");

module.exports = {
  hashPassword: async (password) => await bcrypt.hash(password, 6),

  comparePassword: async (password, hash) =>
    await bcrypt.compare(password, hash),
};
