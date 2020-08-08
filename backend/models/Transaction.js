module.exports = (sequelize, DataTypes) => {

  const Transaction = sequelize.define(
    "Transaction",
    {
      trans_no: {
        unique: true,
        type: DataTypes.STRING,
        allowNull: false,
      },
      start_date: {
        allowNull: false,
        type: DataTypes.DATE(6),
      },
      end_date: {
        allowNull: false,
        type: DataTypes.DATE(6),
      },
      total_payment: {
        allowNull: false,
        type: DataTypes.STRING(1200),
      },
      vehicle_id: {
        allowNull: false,
        type: DataTypes.STRING(1200),
      },
    },

    {
      tableName: "Transaction",
    }

  );

  Transaction.associate = (models) => {

    Transaction.belongsTo(models.User, { foreignKey: "customer_id" });
    Transaction.hasMany(models.Vehicle, { foreignKey: "trans_no" });
    
  };

  return Transaction;
};
