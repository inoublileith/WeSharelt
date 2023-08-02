module.exports = (sequelize, DataTypes) => {
  const Association = sequelize.define('associations', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    nature: {
      type: DataTypes.STRING,
    },
    objectif: {
      type: DataTypes.STRING,
    },
    mission: {
      type: DataTypes.STRING,
    },
    logo: {
      type: DataTypes.STRING,
    },
    date_fondation: {
      type: DataTypes.STRING,
    },
    president: {
      type: DataTypes.STRING,
    },
    SG: {
      type: DataTypes.STRING,
    },
    RT: {
      type: DataTypes.STRING,
    },
    vice_president: {
      type: DataTypes.STRING,
    },
    contrat: {
      type: DataTypes.STRING,
    },
    tel_association: {
      type: DataTypes.INTEGER,
    },
  })
  return Association
}
