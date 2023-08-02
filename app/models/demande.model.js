module.exports = (sequelize, DataTypes) => {
  const Demande = sequelize.define('demandes', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
    },
    etat: {
      type: DataTypes.INTEGER,
    },
    qte: {
      type: DataTypes.INTEGER,
    },
    nb_personne: {
      type: DataTypes.INTEGER,
    },
    date_de: {
      type: DataTypes.STRING,
    },
    idstock: {
      type: DataTypes.INTEGER,
    },
  })
  return Demande
}
