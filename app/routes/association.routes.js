const router = require('express').Router()

const associations = require('../controllers/association.controller.js')
//const upload = require('../middleware/upload')

// Create a new associations
router.post('/create', associations.create)

// Retrieve all associationss
router.get('/', associations.findAll)

// Retrieve all promoted produit
//router.get('/promoted', produit.findAllPromoted)

// Retrieve a single associations with id
router.get('/:id', associations.findOne)

// Update a associations with id
router.put('/:id', associations.update)

// Delete a associations with id
router.delete('/:id', associations.delete)

// Delete all associationss
router.delete('/', associations.deleteAll)

module.exports = router
