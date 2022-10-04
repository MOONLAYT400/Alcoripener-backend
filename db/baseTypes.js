module.exports = (DataTypes) => ({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.fn("uuid_generate_v4"),
  },
  reference: (
    table,
    key = "id",
    { allowNull = false, primaryKey = false, onDelete = "cascade" } = {}
  ) => ({
    type: DataTypes.UUID,
    allowNull,
    primaryKey,
    references: {
      model: table,
      key,
    },
    onUpdate: "cascade",
    onDelete,
  }),
  timestamps: {
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
    },
    deleted_at: DataTypes.DATE,
  },
});
