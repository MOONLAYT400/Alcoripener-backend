const baseTypes = require("../baseTypes");

module.exports = {
  async up(queryInterface, Sequelize) {
    const types = baseTypes(Sequelize);
    queryInterface.createTable("devices", {
      id: types.id,
      deviceRef: { type: Sequelize.INTEGER, allowNull: false },
      deviceSettings: { type: Sequelize.TEXT },
      deviceTests: { type: Sequelize.TEXT },
      userId: types.reference("users", "id"),
      ...types.timestamps,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("devices");
  },
};
