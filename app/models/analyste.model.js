module.exports = (sequelize, DataTypes) => {
  const Analyste = sequelize.define('analystes', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    specialite: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mission: {
      type: DataTypes.STRING,
    },
    salaire: {
      type: DataTypes.INTEGER,
    },
    Date_ins: {
      type: DataTypes.STRING,
    },
  })
  return Analyste
}
