module.exports = (sequelize, DataTypes) => {
  const Livraison = sequelize.define('livraisons', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_ins: {
      type: DataTypes.STRING,
    },
    date_liv: {
      type: DataTypes.STRING,
    },
    etat_liv: {
      type: DataTypes.STRING,
    },
  })
  return Livraison
}
