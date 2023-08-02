module.exports = (sequelize, DataTypes) => {
  const Benevole = sequelize.define('benevoles', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    facebook: {
      type: DataTypes.STRING,
    },
    linkedin: {
      type: DataTypes.STRING,
    },
    context: {
      type: DataTypes.STRING,
    },
    tel: {
      type: DataTypes.STRING,
    },
    retenu: {
      type: DataTypes.INTEGER,
    },
    etat: {
      type: DataTypes.INTEGER,
    },
    date_ins: {
      type: DataTypes.STRING,
    },
  })
  return Benevole
}
