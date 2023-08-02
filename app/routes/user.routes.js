const { authJwt } = require('../middleware')
const controller = require('../controllers/user.controller')
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })
  app.get('/api/namespace/public', controller.allAccess)
  app.get('/api/namespace/user', [authJwt.verifyToken], controller.userBoard)

  app.get(
    '/api/namespace/admin',
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  )

  app.get(
    '/api/namespace/analyste',
    [authJwt.verifyToken, authJwt.isAnalyste],
    controller.analysteBoard
  )
  app.get(
    '/api/namespace/association',
    [authJwt.verifyToken, authJwt.isAssociation],
    controller.associationBoard
  )
  app.get(
    '/api/namespace/organisme',
    [authJwt.verifyToken, authJwt.isOrganisme],
    controller.organismeBoard
  )

  app.get('/api/users/:id', controller.findById)

  app.get('/api/users/', controller.findAll)
  app.post('/api/users/', controller.create)
  app.put('/api/users/:id', controller.update)
  app.delete('/api/users/:id', controller.delete)
  app.delete('/api/users/', controller.deleteAll)
}
