const BaseModel = require("./BaseModel");
class Device extends BaseModel {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        deviceRef: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        deviceSettings: {
          type: DataTypes.TEXT,
        },
        deviceTests: {
          type: DataTypes.TEXT,
        },
        userId: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        ...BaseModel.timestamps(DataTypes),
      },
      {
        underscored: true,
        timestamps: true,
        tableName: "devices",
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.User, { as: "user", foreignKey: "id" });
  }
}
module.exports = Device;
