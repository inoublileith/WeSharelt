const router = require('express').Router()

const livraisons = require('../controllers/livraison.controller.js')
//const upload = require('../middleware/upload')

// Create a new associations
router.post('/create', livraisons.create)

// Retrieve all associationss
router.get('/', livraisons.findAll)

// Retrieve all promoted produit
//router.get('/promoted', produit.findAllPromoted)

// Retrieve a single associations with id
router.get('/:id', livraisons.findOne)

// Update a associations with id
router.put('/:id', livraisons.update)

// Delete a associations with id
router.delete('/:id', livraisons.delete)

// Delete all associationss
router.delete('/', livraisons.deleteAll)

module.exports = router
