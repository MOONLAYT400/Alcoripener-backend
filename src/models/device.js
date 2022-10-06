module.exports = (sequelize, DataTypes) => {
  const Device = sequelize.define(
    "Device",
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
      created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
      deleted_at: {
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: false,
      tableName: "devices",
    }
  );
  Device.associate = (models) => {
    Device.belongsTo(models.User, {
      foreignKey: {
        type: DataTypes.UUID,
        field: "id",
      },
    });
  };
  return Device;
};
