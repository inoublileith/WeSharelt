module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define('stocks', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
    },
    quantite_total: {
      type: DataTypes.INTEGER,
    },

    public: {
      type: DataTypes.INTEGER,
    },
  })
  return Stock
}
