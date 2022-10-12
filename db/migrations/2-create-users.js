const baseTypes = require("../baseTypes");

module.exports = {
  async up(queryInterface, Sequelize) {
    const types = baseTypes(Sequelize);
    queryInterface.createTable("users", {
      id: types.id,
      login: { type: Sequelize.STRING, allowNull: false },
      password: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, allowNull: false },
      client: { type: Sequelize.STRING, allowNull: false },
      ...types.timestamps,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("users");
  },
};
