const router = require('express').Router()

const evenements = require('../controllers/evenement.controller.js')
//const upload = require('../middleware/upload')

// Create a new evenements
router.post('/create', evenements.create)

// Retrieve all evenementss
router.get('/', evenements.findAll)

// Retrieve all promoted produit
//router.get('/promoted', produit.findAllPromoted)

// Retrieve a single evenements with id
router.get('/:id', evenements.findOne)

// Update a evenements with id
router.put('/:id', evenements.update)

// Delete a evenements with id
router.delete('/:id', evenements.delete)

// Delete all evenementss
router.delete('/', evenements.deleteAll)

module.exports = router
