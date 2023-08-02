module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    civil: {
      type: Sequelize.STRING,
    },
    nom: {
      type: Sequelize.STRING,
    },
    prenom: {
      type: Sequelize.STRING,
    },
    date_naissance: {
      type: Sequelize.STRING,
    },
    cin: {
      type: Sequelize.INTEGER,
    },
    tel: {
      type: Sequelize.INTEGER,
    },
    email: {
      type: Sequelize.STRING,
    },
    gouvernorat: {
      type: Sequelize.STRING,
    },
    adresse: {
      type: Sequelize.STRING,
    },
    cpostal: {
      type: Sequelize.INTEGER,
    },
    delegation: {
      type: Sequelize.STRING,
    },
    login: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    profil: {
      type: Sequelize.INTEGER,
    },
    permissions: {
      type: Sequelize.INTEGER,
    },
    etat: {
      type: Sequelize.INTEGER,
    },
    date_ins: {
      type: Sequelize.STRING,
    },
  });
  return User;
};
