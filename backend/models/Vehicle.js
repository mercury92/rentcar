module.exports = (sequelize, DataTypes) => {

  const Vehicle = sequelize.define(
      
    "Vehicle",
    {
      vehicle_id: {
        unique: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      vehicle_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amout: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },

    {
      tableName: "Vehicle",
    }

  );

  Vehicle.associate = (models) => {

    Vehicle.belongsTo(models.Transaction, { foreignKey: "trans_no" });
    
  };

  return Vehicle;
};
