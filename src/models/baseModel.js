const { Sequelize } = require("../services/Db");

class BaseModel extends Sequelize.Model {
  getTableName() {
    return this.constructor.tableName;
  }
  static timestamps(DataTypes) {
    return {
      createdAt: { type: DataTypes.DATE, allowNull: false },
      updatedAt: { type: DataTypes.DATE, allowNull: false },
      deletedAt: { type: DataTypes.DATE },
    };
  }
}

module.exports = BaseModel;
