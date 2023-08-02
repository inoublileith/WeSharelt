module.exports = (sequelize, DataTypes) => {
  const Don = sequelize.define('dons', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
    },
    qte: {
      type: DataTypes.INTEGER,
    },
    date_livraison: {
      type: DataTypes.STRING,
    },
    date_validation: {
      type: DataTypes.STRING,
    },
    etat: {
      type: DataTypes.INTEGER,
    },
  })
  return Don
}
