module.exports = (sequelize, DataTypes) => {
  const Reponsef = sequelize.define('reponsefs', {
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
  return Reponsef
}
