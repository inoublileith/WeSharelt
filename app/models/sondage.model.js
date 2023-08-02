module.exports = (sequelize, DataTypes) => {
  const Sondage = sequelize.define('sondage', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: 4,
      },
    },
    proposition1: {
      type: DataTypes.STRING,
    },
    proposition2: {
      type: DataTypes.STRING,
    },
    proposition3: {
      type: DataTypes.STRING,
    },
    date_ins: {
      type: DataTypes.STRING,
    },
    
    etat: {
      type: DataTypes.INTEGER,
    },
  })
  return Sondage
}
