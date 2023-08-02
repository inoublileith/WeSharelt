module.exports = (sequelize, DataTypes) => {
  const Organisme = sequelize.define('organismes', {
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
    domaine: {
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
    contact: {
      type: DataTypes.STRING,
    },
    adresse: {
      type: DataTypes.STRING,
    },
    tel: {
      type: DataTypes.INTEGER,
    },
    evenement: {
      type: DataTypes.STRING,
    },
    stock_global: {
      type: DataTypes.INTEGER,
    },
  })
  return Organisme
}
