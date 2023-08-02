const express = require('express')
const cors = require('cors')
const app = express()
var corsOptions = {
  origin: 'http://localhost:9900',
}
app.use(cors(corsOptions))
// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// simple route

const db = require('./app/models')
const Role = db.role
db.sequelize.sync().then(() => {
  console.log('Resync Db ...')
 initial()
})
// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and Resync Db')
//initial()
// })

function initial() {
  Role.create({
    id: 1,
    name: 'admin',
  })

  Role.create({
    id: 2,
    name: 'analyste',
  })

  Role.create({
    id: 3,
    name: 'association',
  })

  Role.create({
    id: 4,
    name: 'organisme',
  })

  Role.create({
    id: 5,
    name: 'user',
  })
}

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to INFOESPRIT WORLD.' })
})

//include Routes
const recommandationRouter = require('./app/routes/recommandation.routes')
app.use('/api/recommandations', recommandationRouter)
const organismeRouter = require('./app/routes/organisme.routes')
app.use('/api/organismes', organismeRouter)
const adminRouter = require('./app/routes/admin.routes')
app.use('/api/admin', adminRouter)
const analysteRouter = require('./app/routes/analyste.routes')
app.use('/api/analystes', analysteRouter)
const benevoleRouter = require('./app/routes/benevole.routes')
app.use('/api/benevoles', benevoleRouter)
const livraisonRouter = require('./app/routes/livraison.routes')
app.use('/api/livraisons', livraisonRouter)
const demandeRouter = require('./app/routes/demande.routes')
app.use('/api/demandes', demandeRouter)
const associationRouter = require('./app/routes/association.routes')
app.use('/api/associations', associationRouter)
const donRouter = require('./app/routes/don.routes')

app.use('/api/dons', donRouter)
const stockRouter = require('./app/routes/stock.routes')
app.use('/api/stocks', stockRouter)
const evenementRouter = require('./app/routes/evenement.routes')
app.use('/api/evenements', evenementRouter)
const sdfRouter = require('./app/routes/sdf.routes')
app.use('/api/sdfs', sdfRouter)
const forumRouter = require('./app/routes/forum.routes')
app.use('/api/forums', forumRouter)
const sondageRouter = require('./app/routes/sondage.routes')
app.use('/api/sondages', sondageRouter)

const authRouter = require('./app/routes/auth.routes')
authRouter(app)
const userRouter = require('./app/routes/user.routes')
userRouter(app)

// data = {
//   titre: 'test',
//   description: 'test',
//   domaine: 'dfgdfg',
//   specification: 'dfgdffg',
//   retenu: 0,
//   etat: 1,
//   date_ins: '2022-03-12T10:35:19.000Z',
// }
// console.table(data)

// set port, listen for requests
const PORT = process.env.PORT || 8088
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}.`)
})
