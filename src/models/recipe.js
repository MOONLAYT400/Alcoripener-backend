const BaseModel = require("./baseModel");
class Recipe extends BaseModel {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        recipeRef: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        recipeName: {
          type: DataTypes.TEXT,
        },
        recipeSettings: {
          type: DataTypes.TEXT,
        },
        ...BaseModel.timestamps(DataTypes),
      },
      {
        underscored: true,
        timestamps: true,
        tableName: "recipes",
        sequelize,
      }
    );
  }
}
module.exports = Recipe;
