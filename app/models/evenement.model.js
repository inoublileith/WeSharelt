module.exports = (sequelize, DataTypes) => {
  const Evenement = sequelize.define('evenements', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
    },
    adresse: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    public: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
  })
  return Evenement
}
