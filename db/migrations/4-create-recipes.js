const baseTypes = require("../baseTypes");

module.exports = {
  async up(queryInterface, Sequelize) {
    const types = baseTypes(Sequelize);
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        "recipes",
        {
          id: types.id,
          recipe_ref: { type: Sequelize.INTEGER, allowNull: false },
          recipe_settings: { type: Sequelize.TEXT },
          recipe_name: { type: Sequelize.TEXT },
          ...types.timestamps,
        },
        { transaction }
      );
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("recipes");
  },
};
