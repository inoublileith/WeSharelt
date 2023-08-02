module.exports = (sequelize, DataTypes) => {
  const Recommandation = sequelize.define('recommandations', {
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
    domaine: {
      type: DataTypes.STRING,
    },
    specification: {
      type: DataTypes.STRING,
    },
    retenu: {
      type: DataTypes.INTEGER,
    },
    etat: {
      type: DataTypes.INTEGER,
    },
  })
  return Recommandation
}
