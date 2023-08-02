module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('admins', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom_app: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
    },
    date_publication: {
      type: DataTypes.STRING,
    },
    provider: {
      type: DataTypes.STRING,
    },
    provider_SGBD: {
      type: DataTypes.STRING,
    },
    date_ins: {
      type: DataTypes.STRING,
    },
    date_lastup: {
      type: DataTypes.STRING,
    },
  })
  return Admin
}
