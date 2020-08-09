module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(

    "User",
    {
      customer_id: {
        primaryKey:true,
        type: DataTypes.INTEGER,
        autoIncrement:true
      },
      username: {
        unique: true,
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },

    {
      tableName: "users",
    }

  );
  User.associate = (models) => {

    User.hasMany(models.Transaction, { foreignKey: "customer_id" });
    
  };

  return User;
};
