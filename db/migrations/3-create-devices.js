const baseTypes = require("../baseTypes");

module.exports = {
  async up(queryInterface, Sequelize) {
    const types = baseTypes(Sequelize);
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        "devices",
        {
          id: types.id,
          device_ref: { type: Sequelize.INTEGER, allowNull: false },
          device_settings: { type: Sequelize.TEXT },
          device_tests: { type: Sequelize.TEXT },
          user_id: types.reference("users", "id"),
          ...types.timestamps,
        },
        { transaction }
      );

      await queryInterface.addIndex("devices", {
        fields: ["device_ref"],
        unique: true,
        transaction,
      });
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("devices");
  },
};
