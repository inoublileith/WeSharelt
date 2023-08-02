module.exports = (sequelize, DataTypes) => {
  const Reponseson = sequelize.define('reponsesons', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    reponse: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: 4,
      },
    },
  })
  return Reponseson
}
