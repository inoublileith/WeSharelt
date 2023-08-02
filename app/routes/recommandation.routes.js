const router = require('express').Router()

const recommandations = require('../controllers/recommandation.controller.js')
//const upload = require('../middleware/upload')

// Create a new associations
router.post('/create', recommandations.create)

// Retrieve all associationss
router.get('/', recommandations.findAll)

// Retrieve all promoted produit
//router.get('/promoted', produit.findAllPromoted)

// Retrieve a single associations with id
router.get('/:id', recommandations.findOne)

// Update a associations with id
router.put('/:id', recommandations.update)

// Delete a associations with id
router.delete('/:id', recommandations.delete)

// Delete all associationss
router.delete('/', recommandations.deleteAll)

module.exports = router
