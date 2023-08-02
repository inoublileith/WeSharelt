module.exports = (sequelize, DataTypes) => {
  const Sdf = sequelize.define('sdfs', {
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
    genre: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    cas_social: {
      type: DataTypes.STRING,
    },
    handicape: {
      type: DataTypes.INTEGER,
    },
    maladie: {
      type: DataTypes.STRING,
    },
    adresse: {
      type: DataTypes.STRING,
    },
    local: {
      type: DataTypes.STRING,
    },
  })
  return Sdf
}
