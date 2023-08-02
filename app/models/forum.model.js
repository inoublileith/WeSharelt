module.exports = (sequelize, DataTypes) => {
  const Forum = sequelize.define('forums', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sujet: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_ins: {
      type: DataTypes.STRING,
    },
    etat: {
      type: DataTypes.INTEGER,
    },
  })
  return Forum
}
