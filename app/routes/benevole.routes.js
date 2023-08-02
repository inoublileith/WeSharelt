const router = require('express').Router()

const benevoles = require('../controllers/benevole.controller.js')
//const upload = require('../middleware/upload')

// Create a new associations
router.post('/create', benevoles.create)

// Retrieve all associationss
router.get('/', benevoles.findAll)

// Retrieve all promoted produit
//router.get('/promoted', produit.findAllPromoted)

// Retrieve a single associations with id
router.get('/:id', benevoles.findOne)

// Update a associations with id
router.put('/:id', benevoles.update)

// Delete a associations with id
router.delete('/:id', benevoles.delete)

// Delete all associationss
router.delete('/', benevoles.deleteAll)

module.exports = router
