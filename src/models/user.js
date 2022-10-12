const BaseModel = require("./baseModel");
class User extends BaseModel {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        login: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        client: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        ...BaseModel.timestamps(DataTypes),
      },
      {
        underscored: true,
        timestamps: true,
        tableName: "users",
        sequelize,
      }
    );
  }
  static associate(models) {}
}

module.exports = User;
