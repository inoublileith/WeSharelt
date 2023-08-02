const config = require('../config/db.config.js')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.user = require('./user.model.js')(sequelize, Sequelize)
db.role = require('./role.model.js')(sequelize, Sequelize)
db.refreshToken = require('./refreshToken.model.js')(sequelize, Sequelize)
db.association = require('./association.model.js')(sequelize, Sequelize)
db.benevole = require('./benevole.model.js')(sequelize, Sequelize)
db.demande = require('./demande.model.js')(sequelize, Sequelize)
db.don = require('./don.model.js')(sequelize, Sequelize)
db.evenement = require('./evenement.model.js')(sequelize, Sequelize)
db.forum = require('./forum.model.js')(sequelize, Sequelize)
db.admin = require('./admin.model.js')(sequelize, Sequelize)
db.analyste = require('./analyste.model.js')(sequelize, Sequelize)
db.organisme = require('./organisme.model.js')(sequelize, Sequelize)
db.sdf = require('./sdf.model.js')(sequelize, Sequelize)
db.stock = require('./stock.model.js')(sequelize, Sequelize)
db.livraison = require('./livraison.model.js')(sequelize, Sequelize)
db.recommandation = require('./recommandation.model.js')(sequelize, Sequelize)
db.sondage = require('./sondage.model.js')(sequelize, Sequelize)
db.reponsef = require('./reponsef.model.js')(sequelize, Sequelize)
db.reponseson = require('./reponseson.model.js')(sequelize, Sequelize)

db.role.belongsToMany(db.user, {
  through: 'user_roles',
  foreignKey: 'roleId',
  otherKey: 'userId',
})

db.user.belongsToMany(db.role, {
  through: 'user_roles',
  foreignKey: 'userId',
  otherKey: 'roleId',
})

db.ROLES = ['user', 'admin', 'analyste', 'association', 'organisme']
//Sequelize hasOne Join association 1user ------avoir------- 1Token
db.user.hasOne(db.refreshToken, {
  foreignKey: 'userId',
  targetKey: 'id',
})
db.refreshToken.belongsTo(db.user, {
  foreignKey: 'userId',
  targetKey: 'id',
})

// //Sequelize hasMany Join association 1user ------avoir------- *produit

// //organisme//don
// db.user.hasMany(db.don, {
//   as: "don",
//   foreignkey: "iduser",
// });
// db.don.belongsTo(db.user, { foreignKey: "iduser" });

// //organisme//evenement
// db.user.hasMany(db.evenement, {
//   as: "Evenement_collectif",
//   foreignKey: "iduser",
// });
// db.evenement.belongsTo(db.user, { foreignKey: "iduser" });

//stock//don
db.stock.hasMany(db.don, {
  as: 'Stock_Don',
  foreignKey: 'idstock',
})
db.don.belongsTo(db.stock, { foreignKey: 'idstock' })

db.user.hasMany(db.don, {
  as: 'Mes_Don',
  foreignKey: 'iduser',
})
db.don.belongsTo(db.user, { foreignKey: 'iduser' })
// //assoc//livraison
// db.user.hasMany(db.livraison, {
//   as: "Association_Livraison",
//   foreignKey: "iduser",
// });
// db.livraison.belongsTo(db.user, { foreignKey: "iduser" });

// //assoc//benevole
// db.user.hasMany(db.benevole, {
//   as: "Association_Benevole",
//   foreignKey: "iduser",
// });
// db.benevole.belongsTo(db.user, { foreignKey: "iduser" });

// //assoc//sdf
// db.user.hasMany(db.sdf, {
//   as: "Association_SDF",
//   foreignKey: "iduser",
// });
// db.sdf.belongsTo(db.user, { foreignKey: "iduser" });

// //analyste//recommandation
// db.user.hasMany(db.recommandation, {
//   as: "Analyste_Recommandation",
//   foreignKey: "iduser",
// });
// db.recommandation.belongsTo(db.user, { foreignKey: "iduser" });

// //user//recommandation
// db.user.hasMany(db.recommandation, {
//   as: "Analyste_Recommandation",
//   foreignKey: "iduser",
// });
// db.recommandation.belongsTo(db.user, { foreignKey: "iduser" });

// //associa//stock
// db.stock.belongsToMany(db.user, {
//   through: "demandes",
//   foreignKey: "idstock",
//   otherKey: "iduser",
// });

// db.user.belongsToMany(db.role, {
//   through: "demandes",
//   foreignKey: "iduser",
//   otherKey: "idstock",
// });

module.exports = db

/*
After initializing Sequelize, we don’t need to write CRUD functions, Sequelize supports all of them:

create a new User: create(object)
find a User by id: findByPk(id)
find a User by email: findOne({ where: { email: ... } })
get all Users: findAll()
find all Users by username: findAll({ where: { username: ... } })
*/
